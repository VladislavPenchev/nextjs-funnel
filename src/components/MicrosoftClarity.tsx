"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

const MicrosoftClarity = () => {
  useEffect(() => {
    // Initialize Microsoft Clarity
    const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!clarityProjectId) {
      console.warn(
        "Microsoft Clarity Project ID not found in environment variables"
      );
      return;
    }

    clarity.init(clarityProjectId);
  }, []);

  return null;
};

export default MicrosoftClarity;
