import React from "react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip"
import { HelpCircleIcon } from "lucide-react"

const TooltipHelper = (text: string) => {

  return(
    <TooltipProvider>
      <Tooltip>

        <TooltipTrigger>
      <HelpCircleIcon />
        </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipHelper