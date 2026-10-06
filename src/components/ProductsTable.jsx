import { ChevronDown, SlidersHorizontal, EllipsisVertical } from "lucide-react";
import p1 from "../assets/photos/product1.png";
import p2 from "../assets/photos/product2.png";
import p3 from "../assets/photos/product3.png";

const products = [
  { id: "#12598", image: p1, name: "Off-white shoulder wide s...", price: "₹4,099", sales: 48, stock: 25, status: "In Stock" },
  { id: "#20587", image: p2, name: "Green Velvet semi-sleeve...", price: "₹10,000", sales: 76, stock: 0, status: "Out of Stock" },
  { id: "#10020", image: p3, name: "Nike air max 2099", price: "₹17,500", sales: 32, stock: 3, status: "Restock" },
];

const statusStyles = {
  "In Stock": "bg-success/15 text-success",
  "Out of Stock": "bg-danger/15 text-danger",
  Restock: "bg-warning/15 text-warning",
};

const headings = ["Product ID", "Image", "Product Name", "Price", "Total Sales", "Stock", "Status"];

const ProductsTable = () => {
  return (
    <div className="rounded-[16px] bg-[linear-gradient(135deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_50%,rgba(255,255,255,0.02)_170%)] p-6 backdrop-blur-sm max-sm:p-4">
      <div className="flex items-center justify-between gap-4 max-sm:flex-wrap max-sm:gap-3">
        <h2 className="text-[20px] leading-[140%] max-sm:text-[18px]">
          Best Selling Products
        </h2>

        <div className="flex items-center gap-4 max-sm:gap-3">
          <button className="flex cursor-pointer items-center gap-3 rounded-[8px] bg-surface-2 px-4 py-2 text-[14px] text-muted max-sm:gap-2 max-sm:px-3 max-sm:text-[12px]">
            Filter By
            <SlidersHorizontal size={16} />
          </button>

          <div className="relative">
            <select className="cursor-pointer appearance-none rounded-[8px] bg-surface-2 py-2 pl-4 pr-10 text-[14px] text-muted outline-none max-sm:pl-3 max-sm:pr-9 max-sm:text-[12px]">
              <option>Sort By: Relevance</option>
              <option>Sort By: Price</option>
              <option>Sort By: Sales</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted max-sm:right-3"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto max-sm:mt-4">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="border-b border-white/10">
              {headings.map((h) => (
                <th
                  key={h}
                  className="pb-4 text-[13px] font-medium uppercase tracking-[0.05em] text-muted max-lg:whitespace-nowrap max-lg:pr-4 max-sm:text-[11px]"
                >
                  {h}
                </th>
              ))}
              <th className="pb-4" />
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-white/10 last:border-b-0">
                <td className="py-5 text-[16px] max-lg:whitespace-nowrap max-lg:pr-4 max-sm:py-4 max-sm:text-[14px]">
                  {p.id}
                </td>
                <td className="py-5 max-lg:pr-4 max-sm:py-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="size-[50px] rounded-[4px] object-cover max-sm:size-[44px]"
                  />
                </td>
                <td className="py-5 text-[16px] max-lg:whitespace-nowrap max-lg:pr-4 max-sm:py-4 max-sm:text-[14px]">
                  {p.name}
                </td>
                <td className="py-5 text-[16px] max-lg:whitespace-nowrap max-lg:pr-4 max-sm:py-4 max-sm:text-[14px]">
                  {p.price}
                </td>
                <td className="py-5 text-[16px] max-lg:pr-4 max-sm:py-4 max-sm:text-[14px]">
                  {p.sales}
                </td>
                <td className="py-5 text-[16px] max-lg:pr-4 max-sm:py-4 max-sm:text-[14px]">
                  {p.stock}
                </td>
                <td className="py-5 max-lg:pr-4 max-sm:py-4">
                  <span
                    className={`rounded-full px-4 py-2 text-[15px] max-lg:whitespace-nowrap max-sm:px-3 max-sm:py-1.5 max-sm:text-[13px] ${statusStyles[p.status]}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="py-5 max-sm:py-4">
                  <button className="cursor-pointer text-ink">
                    <EllipsisVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;