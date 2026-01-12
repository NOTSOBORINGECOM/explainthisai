import { useState, useRef, useEffect } from "react";
import DocumentPane from "@/components/try/DocumentPane";
import RedFlagsPane from "@/components/try/RedFlagsPane";
import ChatPane from "@/components/try/ChatPane";
import BottomControlBar from "@/components/try/BottomControlBar";
import MobileTabView from "@/components/try/MobileTabView";
import { useIsMobile } from "@/hooks/use-mobile";
import { RedFlag, mockRedFlags } from "@/lib/mockRedFlags";

const Try = () => {
  const isMobile = useIsMobile();
  const [mode, setMode] = useState<"viewer" | "editor">("viewer");
  const [documentContent, setDocumentContent] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [redFlags, setRedFlags] = useState<RedFlag[]>([]);
  const [selectedFlagId, setSelectedFlagId] = useState<string | null>(null);
  const [highlightedExcerpt, setHighlightedExcerpt] = useState<string | null>(null);
  const [chatContext, setChatContext] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsAnalyzing(true);
    setRedFlags([]);
    setSelectedFlagId(null);
    setHighlightedExcerpt(null);

    // Mock file reading
    const reader = new FileReader();
    reader.onload = () => {
      // Mock content for demo
      const mockDocContent = `CONFIDENTIALITY AND NON-DISCLOSURE AGREEMENT

This Agreement is entered into as of [DATE] between [COMPANY NAME] ("Disclosing Party") and the undersigned individual or entity ("Receiving Party").

1. CONFIDENTIAL INFORMATION
The Receiving Party agrees to hold in strict confidence all proprietary information, trade secrets, technical data, and business information disclosed by the Disclosing Party.

2. NON-COMPETE CLAUSE
During the term of this Agreement and for a period of twenty-four (24) months thereafter, the Receiving Party shall not directly or indirectly engage in any business that competes with the Disclosing Party within any geographic region.

3. INTELLECTUAL PROPERTY ASSIGNMENT
All inventions, discoveries, and improvements made by the Receiving Party during the term of this Agreement, whether or not related to the Disclosing Party's business, shall be the sole and exclusive property of the Disclosing Party.

4. AUTOMATIC RENEWAL
This Agreement shall automatically renew for successive one-year periods unless terminated by either party with ninety (90) days written notice prior to the renewal date.

5. TERMINATION PENALTY
In the event of early termination by the Receiving Party, a termination fee equal to six (6) months of consulting fees shall be payable within 30 days.

6. LIMITATION OF LIABILITY
The Disclosing Party's total liability under this Agreement shall not exceed $100, regardless of the nature of the claim.

7. INDEMNIFICATION
The Receiving Party agrees to indemnify, defend, and hold harmless the Disclosing Party from any and all claims, damages, losses, and expenses arising from the Receiving Party's breach of this Agreement.

8. UNILATERAL AMENDMENT
The Disclosing Party reserves the right to modify the terms of this Agreement at any time with written notice to the Receiving Party.

9. DATA USAGE
The Receiving Party grants the Disclosing Party permission to collect, store, and share any personal data with third-party partners for marketing purposes.

10. DISPUTE RESOLUTION
Any disputes shall be resolved through binding arbitration in the jurisdiction of the Disclosing Party's choosing, with the Receiving Party bearing all costs.`;

      setDocumentContent(mockDocContent);
      
      // Simulate analysis delay
      setTimeout(() => {
        setIsAnalyzing(false);
        setRedFlags(mockRedFlags);
      }, 1800);
    };
    reader.readAsText(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handlePasteIntoEditor = () => {
    setMode("editor");
  };

  const handleFlagClick = (flag: RedFlag) => {
    setSelectedFlagId(flag.id);
    setHighlightedExcerpt(flag.excerpt);
  };

  const handleAskAboutFlag = (flag: RedFlag) => {
    setChatContext(flag.title);
  };

  const handleTextSelection = (text: string) => {
    setSelectedText(text);
  };

  const handleAskAboutSelection = () => {
    if (selectedText) {
      setChatContext(`Selected text: "${selectedText.slice(0, 100)}..."`);
      setSelectedText(null);
    }
  };

  const toggleMode = () => {
    setMode(mode === "viewer" ? "editor" : "viewer");
  };

  const handleReplace = () => {
    setFileName(null);
    setDocumentContent("");
    setRedFlags([]);
    setSelectedFlagId(null);
    setHighlightedExcerpt(null);
    fileInputRef.current?.click();
  };

  if (isMobile) {
    return (
      <MobileTabView
        mode={mode}
        setMode={setMode}
        documentContent={documentContent}
        setDocumentContent={setDocumentContent}
        fileName={fileName}
        isAnalyzing={isAnalyzing}
        redFlags={redFlags}
        selectedFlagId={selectedFlagId}
        highlightedExcerpt={highlightedExcerpt}
        chatContext={chatContext}
        setChatContext={setChatContext}
        onFileUpload={handleFileUpload}
        onUploadClick={handleUploadClick}
        onPasteIntoEditor={handlePasteIntoEditor}
        onFlagClick={handleFlagClick}
        onAskAboutFlag={handleAskAboutFlag}
        fileInputRef={fileInputRef}
      />
    );
  }

  return (
    <div className="h-screen flex flex-col bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Review workspace</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Upload a contract or paste text. We'll surface risky clauses and help you ask smarter questions.
            </p>
          </div>
          <a 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </header>

      {/* Main 3-pane layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane - Document viewer/editor (55%) */}
        <div className="w-[55%] border-r border-border bg-white overflow-hidden flex flex-col">
          <DocumentPane
            mode={mode}
            documentContent={documentContent}
            setDocumentContent={setDocumentContent}
            fileName={fileName}
            highlightedExcerpt={highlightedExcerpt}
            onUploadClick={handleUploadClick}
            onPasteIntoEditor={handlePasteIntoEditor}
            onTextSelection={handleTextSelection}
            selectedText={selectedText}
            onAskAboutSelection={handleAskAboutSelection}
          />
        </div>

        {/* Middle Pane - Red flags (25%) */}
        <div className="w-[25%] border-r border-border bg-white overflow-hidden flex flex-col">
          <RedFlagsPane
            redFlags={redFlags}
            isAnalyzing={isAnalyzing}
            selectedFlagId={selectedFlagId}
            onFlagClick={handleFlagClick}
            onAskAboutFlag={handleAskAboutFlag}
            hasDocument={!!documentContent}
          />
        </div>

        {/* Right Pane - Chat (20%) */}
        <div className="w-[20%] bg-white overflow-hidden flex flex-col">
          <ChatPane
            chatContext={chatContext}
            setChatContext={setChatContext}
          />
        </div>
      </div>

      {/* Bottom Control Bar */}
      <BottomControlBar
        mode={mode}
        onToggleMode={toggleMode}
        fileName={fileName}
        onUploadClick={handleUploadClick}
        onReplace={handleReplace}
      />

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.doc,.txt"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default Try;
