import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, MessageSquare } from "lucide-react";

interface DocumentPaneProps {
  mode: "viewer" | "editor";
  documentContent: string;
  setDocumentContent: (content: string) => void;
  fileName: string | null;
  highlightedExcerpt: string | null;
  onUploadClick: () => void;
  onPasteIntoEditor: () => void;
  onTextSelection: (text: string) => void;
  selectedText: string | null;
  onAskAboutSelection: () => void;
}

const DocumentPane = ({
  mode,
  documentContent,
  setDocumentContent,
  fileName,
  highlightedExcerpt,
  onUploadClick,
  onPasteIntoEditor,
  onTextSelection,
  selectedText,
  onAskAboutSelection
}: DocumentPaneProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to and highlight excerpt
  useEffect(() => {
    if (highlightedExcerpt && contentRef.current) {
      const content = contentRef.current;
      // Find the text and scroll to it
      const textNodes = content.querySelectorAll('span[data-highlight]');
      textNodes.forEach(node => {
        if ((node as HTMLElement).dataset.highlight === highlightedExcerpt) {
          node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }, [highlightedExcerpt]);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (text && text.length > 10) {
      onTextSelection(text);
    }
  };

  // Render content with highlighting
  const renderHighlightedContent = () => {
    if (!documentContent) return null;
    
    if (!highlightedExcerpt) {
      return <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{documentContent}</p>;
    }

    const parts = documentContent.split(highlightedExcerpt);
    if (parts.length === 1) {
      return <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{documentContent}</p>;
    }

    return (
      <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
        {parts[0]}
        <span 
          data-highlight={highlightedExcerpt}
          className="bg-warning/20 text-warning-foreground px-1 rounded border-l-2 border-warning"
        >
          {highlightedExcerpt}
        </span>
        {parts.slice(1).join(highlightedExcerpt)}
      </p>
    );
  };

  // Empty state
  if (!documentContent && !fileName) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
          <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Upload a document</h2>
        <p className="text-muted-foreground mb-6 max-w-sm">
          PDF/DOCX supported. Or switch to text editor.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={onUploadClick} className="bg-cta hover:bg-cta/90 text-cta-foreground">
            <Upload className="w-4 h-4 mr-2" />
            Upload PDF / DOCX
          </Button>
          <Button variant="outline" onClick={onPasteIntoEditor}>
            Paste into editor
          </Button>
        </div>
      </div>
    );
  }

  // Editor mode
  if (mode === "editor") {
    return (
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border">
          <h3 className="text-sm font-medium text-foreground">Text Editor</h3>
          {fileName && <p className="text-xs text-muted-foreground mt-1">{fileName}</p>}
        </div>
        <div className="flex-1 p-4 relative">
          <textarea
            ref={textareaRef}
            value={documentContent}
            onChange={(e) => setDocumentContent(e.target.value)}
            onMouseUp={handleMouseUp}
            placeholder="Paste your document text here..."
            className="w-full h-full resize-none bg-transparent text-sm leading-relaxed focus:outline-none text-foreground placeholder:text-muted-foreground"
          />
          {selectedText && (
            <div className="absolute bottom-4 right-4">
              <Button 
                size="sm" 
                onClick={onAskAboutSelection}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <MessageSquare className="w-3 h-3 mr-1" />
                Ask about selection
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Viewer mode
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-medium text-foreground">Document Viewer</h3>
        {fileName && <p className="text-xs text-muted-foreground mt-1">{fileName}</p>}
      </div>
      <div 
        ref={contentRef}
        className="flex-1 overflow-y-auto p-6"
        onMouseUp={handleMouseUp}
      >
        {renderHighlightedContent()}
        {selectedText && (
          <div className="fixed bottom-20 right-[46%] z-10">
            <Button 
              size="sm" 
              onClick={onAskAboutSelection}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              Ask about selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentPane;
