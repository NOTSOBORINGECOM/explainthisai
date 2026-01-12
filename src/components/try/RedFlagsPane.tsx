import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, Eye, MessageSquare } from "lucide-react";
import { RedFlag } from "@/lib/mockRedFlags";
import { cn } from "@/lib/utils";

interface RedFlagsPaneProps {
  redFlags: RedFlag[];
  isAnalyzing: boolean;
  selectedFlagId: string | null;
  onFlagClick: (flag: RedFlag) => void;
  onAskAboutFlag: (flag: RedFlag) => void;
  hasDocument: boolean;
}

const severityColors = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-blue-100 text-blue-700 border-blue-200"
};

const RedFlagsPane = ({
  redFlags,
  isAnalyzing,
  selectedFlagId,
  onFlagClick,
  onAskAboutFlag,
  hasDocument
}: RedFlagsPaneProps) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-warning" />
          Red flags
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Empty state */}
        {!hasDocument && !isAnalyzing && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Red flags will appear here after analysis.
            </p>
          </div>
        )}

        {/* Loading state */}
        {isAnalyzing && (
          <>
            <div className="text-center py-4">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 border-2 border-cta border-t-transparent rounded-full animate-spin" />
                Analyzing document…
              </div>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-3 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Skeleton className="h-5 w-14 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </>
        )}

        {/* Red flags list */}
        {!isAnalyzing && redFlags.map((flag) => (
          <div
            key={flag.id}
            className={cn(
              "p-3 rounded-lg border bg-card transition-all cursor-pointer hover:shadow-md",
              selectedFlagId === flag.id 
                ? "border-primary ring-2 ring-primary/20" 
                : "border-border hover:border-primary/50"
            )}
            onClick={() => onFlagClick(flag)}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full border",
                severityColors[flag.severity]
              )}>
                {flag.severity.charAt(0).toUpperCase() + flag.severity.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground">{flag.category}</span>
            </div>
            <h4 className="text-sm font-medium text-foreground mb-1">{flag.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{flag.summary}</p>
            
            <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border">
              <button 
                className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onFlagClick(flag);
                }}
              >
                <Eye className="w-3 h-3" />
                View in document
              </button>
              <button 
                className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onAskAboutFlag(flag);
                }}
              >
                <MessageSquare className="w-3 h-3" />
                Ask about this
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedFlagsPane;
