import { Button } from "@/components/ui/button";
import { FileText, Upload, RefreshCw } from "lucide-react";

interface BottomControlBarProps {
  mode: "viewer" | "editor";
  onToggleMode: () => void;
  fileName: string | null;
  onUploadClick: () => void;
  onReplace: () => void;
}

const BottomControlBar = ({
  mode,
  onToggleMode,
  fileName,
  onUploadClick,
  onReplace
}: BottomControlBarProps) => {
  return (
    <div className="bg-white border-t border-border px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Mode toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleMode}
          className="text-sm"
        >
          <FileText className="w-4 h-4 mr-2" />
          {mode === "viewer" ? "Text editor" : "Viewer"}
        </Button>

        {/* Right side - Upload / File info */}
        <div className="flex items-center gap-3">
          {fileName ? (
            <>
              <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                {fileName}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={onReplace}
                className="text-sm"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Replace
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={onUploadClick}
              className="text-sm"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload PDF / Doc
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomControlBar;
