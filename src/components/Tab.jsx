import { useTabStore } from "@/stores/useTabStore";

export default function Tab({ title, key }) {
  const selectedTab = useTabStore((state) => state.selectedTab);
  const setSelectedTab = useTabStore((state) => state.setSelectedTab);

  return (
    <button
      onClick={() => setSelectedTab(key)}
      className={`${selectedTab === key && "border-b border-dark"}`}
    >
      {title}
    </button>
  );
}
