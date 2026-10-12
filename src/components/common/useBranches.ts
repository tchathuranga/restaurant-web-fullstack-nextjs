"use client";

import { useEffect, useState } from "react";
import { BranchProps } from "@/interfaces/branch";
import { DEFAULT_BRANCHES } from "@/const/branches";
import { getBranches } from "@/services/siteService";

// Branches managed in the dashboard; falls back to the built-in list when none are stored
export function useBranches() {
  const [branches, setBranches] = useState<BranchProps[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getBranches().then((result) => {
      if (cancelled) return;
      setBranches(result.success && result.data && result.data.length > 0 ? result.data : DEFAULT_BRANCHES);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { branches, loaded };
}
