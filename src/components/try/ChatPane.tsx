import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, X, MessageSquare, Sparkles } from "lucide-react";

interface ChatPaneProps {
  chatContext: string | null;
  setChatContext: (context: string | null) => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedPrompts = [
  "Summarise the document",
  "Explain this clause",
  "What should I ask before signing?"
];

const ChatPane = ({ chatContext, setChatContext }: ChatPaneProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setChatContext(null);

    // Mock assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getMockResponse(input)
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 800);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const getMockResponse = (question: string): string => {
    if (question.toLowerCase().includes("summarise") || question.toLowerCase().includes("summary")) {
      return "This is a confidentiality and non-disclosure agreement with several concerning clauses. Key issues include: a very broad 24-month non-compete, full IP assignment even for unrelated work, automatic renewal with 90-day notice requirement, and unfavorable dispute resolution terms. I'd recommend negotiating the non-compete scope, IP assignment limits, and termination terms.";
    }
    if (question.toLowerCase().includes("clause")) {
      return "This clause requires you to assign ownership of ALL inventions you create during the agreement period to the other party—even those completely unrelated to their business. This is unusually broad and could affect personal projects or side work. Consider asking for this to be limited to work directly related to your engagement.";
    }
    if (question.toLowerCase().includes("ask") || question.toLowerCase().includes("before signing")) {
      return "Before signing, consider asking:\n\n1. Can the non-compete be limited to 6-12 months instead of 24?\n2. Can IP assignment be limited to work directly related to this engagement?\n3. What's the process for termination without the 6-month penalty?\n4. Can the arbitration clause be mutual (shared costs)?\n5. Can you add a 30-day cure period for any claimed breaches?";
    }
    return "Based on my analysis of this document, that's an important question. The clause you're asking about could have significant implications. I'd recommend reviewing it carefully with a legal professional before signing.";
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary" />
          Ask questions
        </h3>
      </div>

      {/* Chat context banner */}
      {chatContext && (
        <div className="px-4 py-2 bg-primary/5 border-b border-primary/10">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs text-primary truncate">
              <span className="text-muted-foreground">Talking about:</span> {chatContext}
            </p>
            <button 
              onClick={() => setChatContext(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">
              Ask questions about your document or any flagged issues.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] rounded-lg px-3 py-2 text-xs leading-relaxed ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {message.content.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested prompts */}
      {messages.length === 0 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-1.5">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handlePromptClick(prompt)}
                className="text-xs px-2 py-1 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="p-3 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 text-sm bg-muted rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-9 w-9"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPane;
