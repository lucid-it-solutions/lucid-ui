declare module "react-html-table-to-excel-3";

// SCSS Modules
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

// Global CSS/SCSS imports
declare module '*.scss';
declare module '*.css';

declare module "*.scss" {
    const content: { [className: string]: string };
    export default content;
}