import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleExpanded,
  setExpanded,
  toggleMobile,
  closeMobile,
  openMobile,
} from "@/store/ui/sidebarSlice";

export function useSidebar() {
  const dispatch = useAppDispatch();

  const { expanded, mobileOpen } = useAppSelector(
    (state) => state.sidebar
  );

  return {
    // state
    expanded,
    mobileOpen,

    // actions
    toggleExpanded: () => dispatch(toggleExpanded()),
    setExpanded: (v: boolean) => dispatch(setExpanded(v)),

    openMobile: () => dispatch(openMobile()),
    closeMobile: () => dispatch(closeMobile()),
    toggleMobile: () => dispatch(toggleMobile()),
  };
}