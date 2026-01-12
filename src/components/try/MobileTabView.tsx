import { useState, RefObject } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, AlertTriangle, MessageSquare, Upload } from "lucide-react";
import DocumentPane from "./DocumentPane";
import RedFlagsPane from "./RedFlagsPane";
import ChatPane from "./ChatPane";
import { RedFlag } from "@/lib/mockRedFlags";

interface MobileTabViewProps {
  mode: "viewer" | "editor";
  setMode: (mode: "viewer" | "editor") => void;
  documentContent: string;
  setDocumentContent: (content: string) => void;
  fileName: string | null;
  isAnalyzing: boolean;
  redFlags: RedFlag[];
  selectedFlagId: string | null;
  highlightedExcerpt: string | null;
  chatContext: string | null;
  setChatContext: (context: string | null) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUploadClick: () => void;
  onPasteIntoEditor: () => void;
  onFlagClick: (flag: RedFlag) => void;
  onAskAboutFlag: (flag: RedFlag) => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

const MobileTabView = ({
  mode,
  setMode,
  documentContent,
  setDocumentContent,
  fileName,
  isAnalyzing,
  redFlags,
  selectedFlagId,
  highlightedExcerpt,
  chatContext,
  setChatContext,
  onFileUpload,
  onUploadClick,
  onPasteIntoEditor,
  onFlagClick,
  onAskAboutFlag,
  fileInputRef
}: MobileTabViewProps) => {
  const [activeTab, setActiveTab] = useState("document");
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const handleTextSelection = (text: string) => {
    setSelectedText(text);
  };

  const handleAskAboutSelection = () => {
    if (selectedText) {
      setChatContext(`Selected text: "${selectedText.slice(0, 100)}..."`);
      setSelectedText(null);
      setActiveTab("chat");
    }
  };

  const handleAskAboutFlagMobile = (flag: RedFlag) => {
    onAskAboutFlag(flag);
    setActiveTab("chat");
  };

  return (
    <div className="h-screen flex flex-col bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Review workspace</h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Upload a contract or paste text.
            </p>
          </div>
          <a 
            href="/" 
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </a>
        </div>
      </header>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3 rounded-none bg-white border-b border-border h-12">
          <TabsTrigger value="document" className="flex items-center gap-1.5 text-xs">
            <FileText className="w-4 h-4" />
            Document
          </TabsTrigger>
          <TabsTrigger value="flags" className="flex items-center gap-1.5 text-xs relative">
            <AlertTriangle className="w-4 h-4" />
            Red Flags
            {redFlags.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-warning text-warning-foreground text-[10px] rounded-full flex items-center justify-center">
                {redFlags.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-1.5 text-xs">
            <MessageSquare className="w-4 h-4" />
            Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="document" className="flex-1 m-0 bg-white overflow-hidden">
          <DocumentPane
            mode={mode}
            documentContent={documentContent}
            setDocumentContent={setDocumentContent}
            fileName={fileName}
            highlightedExcerpt={highlightedExcerpt}
            onUploadClick={onUploadClick}
            onPasteIntoEditor={onPasteIntoEditor}
            onTextSelection={handleTextSelection}
            selectedText={selectedText}
            onAskAboutSelection={handleAskAboutSelection}
          />
        </TabsContent>

        <TabsContent value="flags" className="flex-1 m-0 bg-white overflow-hidden">
          <RedFlagsPane
            redFlags={redFlags}
            isAnalyzing={isAnalyzing}
            selectedFlagId={selectedFlagId}
            onFlagClick={(flag) => {
              onFlagClick(flag);
              setActiveTab("document");
            }}
            onAskAboutFlag={handleAskAboutFlagMobile}
            hasDocument={!!documentContent}
          />
        </TabsContent>

        <TabsContent value="chat" className="flex-1 m-0 bg-white overflow-hidden">
          <ChatPane
            chatContext={chatContext}
            setChatContext={setChatContext}
          />
        </TabsContent>
      </Tabs>

      {/* Bottom controls */}
      <div className="bg-white border-t border-border px-4 py-3 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMode(mode === "viewer" ? "editor" : "viewer")}
          className="text-xs"
        >
          <FileText className="w-3 h-3 mr-1" />
          {mode === "viewer" ? "Editor" : "Viewer"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onUploadClick}
          className="text-xs"
        >
          <Upload className="w-3 h-3 mr-1" />
          {fileName ? "Replace" : "Upload"}
        </Button>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.doc,.txt"
        onChange={onFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default MobileTabView;
