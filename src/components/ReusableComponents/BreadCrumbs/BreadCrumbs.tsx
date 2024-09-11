import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BreadCrumbs.css";

// Define the type for a single breadcrumb item
interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Define the props type for the Breadcrumbs component
interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
            aria-current={index === items.length - 1 ? "page" : undefined}>
            {index < items.length - 1 ? (
              <a
                className="text-white text-decoration-none"
                href={item.href || "#"}>
                {item.label}
              </a>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Function to generate breadcrumb items from current path
const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathSegments = pathname.split("/").filter(Boolean); // Split and filter empty segments
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`; // Create href for each segment
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize segment label
      href: index === pathSegments.length - 1 ? undefined : href, // No href for last segment
    };
  });

  // Add Home breadcrumb at the start
  return [{ label: "Home", href: "/" }, ...breadcrumbItems];
};

// Breadcrumbs component that includes the logic to generate items
const BreadcrumbsContainer: React.FC = () => {
  const location = useLocation();
  const breadcrumbsItems = generateBreadcrumbs(location.pathname);

  return <Breadcrumbs items={breadcrumbsItems} />;
};

export default BreadcrumbsContainer;
