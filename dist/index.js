"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ActionArea: () => ActionArea_default,
  ActionContainer: () => ActionContainer_default,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Button: () => Button,
  ButtonContainer: () => ButtonContainer_default,
  ButtonContainerNoWrap: () => ButtonContainerNoWrap_default,
  Calendar: () => Calendar,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  ColumnContainer: () => ColumnContainer_default,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  ContainerLabel: () => ContainerLabel_default,
  ContentGrid: () => ContentGrid_default,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Divider: () => Divider,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerPortal: () => DrawerPortal,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  FieldSetInput: () => FieldSetInput_default2,
  FieldSetTextArea: () => FieldSetTextArea_default,
  FieldSetTextAreaCN: () => FieldSet_TextArea_default,
  FilterToggle: () => FilterToggle_default2,
  FlexFieldRow: () => FlexFieldRow_default,
  FlexFieldRowWrap: () => FlexFieldRowWrap_default,
  FlexRow: () => FlexRow_default,
  FlexiRowMatrix: () => FlexiRowMatrix_default,
  FlexiRowMatrixLeftAlign: () => FlexiRowMatrixLeftAlign_default,
  Footer: () => Footer_default2,
  Form: () => Form,
  FormContentGrid: () => FormContentGrid_default,
  FormContentNav: () => FormContentNav_default,
  FormControl: () => FormControl,
  FormDescription: () => FormDescription,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  FormSection: () => FormSection_default,
  HollowButton: () => HollowButton_default,
  ImageContainer: () => ImageContainer_default,
  InfoContainer: () => InfoContainer_default,
  Input: () => Input,
  Label: () => Label,
  LabelContentComponent: () => LabelContentComponent_default,
  LabelContentContainer: () => LabelContentContainer_default,
  LabelContentContainerNoPadding: () => LabelContentContainerNoPadding_default,
  LeftSideUpPart: () => LeftSideUpPart,
  ListMakerComponent: () => ListMakerComponent_default2,
  LoadingOverlay: () => LoadingOverlay_default2,
  LucidButton: () => lucid_button_default,
  MatrixInput: () => MatrixInput_default,
  Modal: () => Modal_default2,
  ModalDivider: () => ModalDivider_default2,
  ModelWithOutline: () => ModalWithOutline_default,
  NormalButton: () => Button_default,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  RadioGroup: () => RadioGroup2,
  RadioGroupItem: () => RadioGroupItem,
  RightSideDownPart: () => RightSideDownPart,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  ShadFieldSetDropdown: () => FieldSet_Dropdown_default,
  ShadFieldSetDropdownListMaker: () => FieldSet_Dropdown_ListMaker_default,
  ShadFieldSetInput: () => FieldSet_Input_default,
  ShadFieldSetInputGray: () => FieldSet_Input_Gray_default,
  ShadFieldSetMatrixInput: () => FieldSet_MatrixInput_default,
  ShadFieldSetToggle: () => FieldSet_Toggle_default,
  ShadFlexField: () => FlexField_default,
  ShadFlexFieldRow2: () => FlexFieldRow2_default,
  ShadMatrixFlexiRowLeftAlign: () => MatrixFlexiRowLeftAlign_default,
  SideFilterStationary: () => SideFilterStationary,
  SkeletonSpan: () => SkeletonSpan_default2,
  StepsMaker: () => StepsMaker_default2,
  Toggle: () => Toggle3,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  YellowButton: () => YellowButton_default,
  buttonVariants: () => buttonVariants,
  colors: () => colors_default,
  skeletonSizes: () => skeleton_default,
  toggleVariants: () => toggleVariants,
  useFormField: () => useFormField
});
module.exports = __toCommonJS(index_exports);

// src/components/common/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NormalButton = (props) => {
  const { text, shrink = false, children, type, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      className: shrink ? "buttonSmall" : "button",
      ...rest,
      type: type ? type : "button",
      children: [
        children,
        text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }) : null
      ]
    }
  );
};
var Button_default = NormalButton;

// src/components/common/ButtonContainer/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ButtonContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "buttonContainer", ...rest, children });
};
var ButtonContainer_default = ButtonContainer;

// src/components/common/Modal/index.scss
var Modal_default = {};

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/common/Modal/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: show ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("modalBackground", "h-full"), role: "modal-bg", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: cn("modalBackground", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: Modal_default.modalHeaderContainer, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: cn(Modal_default.modalHeader, "text-foreground"), children: header }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: Modal_default.contentContainer, children })
      ]
    }
  ) }) : null });
};
var Modal_default2 = Modal;

// src/components/common/Footer/index.tsx
var import_react = require("react");

// src/components/common/Footer/index.scss
var Footer_default = {};

// src/components/common/Footer/index.tsx
var import_fa = require("react-icons/fa");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {}), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("footer", { className: `footer dark:bg-accent`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "footerContainer", style: { flex: "2" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "ABOUT THE PROVIDER" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `${Footer_default.aboutText} dark:text-accent-foreground`, children: "LUCID IT SOLUTIONS is an IT Business Consulting Firm with a goal of providing the right end-to-end business solution to our clients." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://luciditsolutions.com/", target: "_blank", children: "Learn more..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "footerContainer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "LINKS" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Terms of Services" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Privacy Policy" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "BIR WIthholding Tax" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Social Security System" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Phil Health" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "footerContainer", style: { flex: "1.2" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "GET IN TOUCH" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `dark:text-accent-foreground`, children: "For concerns or issues, contact us at" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "iconThenText", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaEnvelope, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "info@luciditsolution.com" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "iconThenText", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaPhoneAlt, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "+632 8571 2262" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ButtonContainer_default, { style: { justifyContent: "flex-start" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "iconLink", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaFacebookF, { fill: "white" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "iconLink", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaTwitter, { fill: "white" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "iconLink", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaLinkedinIn, { fill: "white" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "address", style: { flex: "1.3" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `dark:text-accent-foreground`, children: "\xA9 2017 PAYplusESS. All Rights Reserved." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `dark:text-accent-foreground`, children: "Version 7.2.086" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: `dark:text-accent-foreground`, children: [
        "Designed by",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-secondary dark:text-foreground", children: "LUCID I.T. SOLUTIONS" })
      ] })
    ] })
  ] }) });
};
var Footer_default2 = Footer;

// src/components/common/FieldSetInput/toggle.tsx
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");

// src/components/common/FieldSetInput/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var toggleInputs = ["checkbox", "radio"];
var FieldSetInput = (props) => {
  if (toggleInputs.includes(props.type || "text")) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {});
  }
  const {
    customBG,
    containerstyle,
    type,
    placeholder,
    containerstyle2,
    ...others
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "fieldset",
    {
      className: customBG ? "fieldsetCuston" : "fieldset",
      style: containerstyle,
      "input-type": type || "text",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("legend", { children: placeholder }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            style: containerstyle2,
            type,
            placeholder,
            ...others,
            autoComplete: "off"
          }
        )
      ]
    }
  ) });
};
var FieldSetInput_default2 = FieldSetInput;

// src/components/common/LoadingOverlay/index.tsx
var import_react3 = __toESM(require("react"));

// src/components/common/LoadingOverlay/index.scss
var LoadingOverlay_default = {};

// src/components/common/LoadingOverlay/index.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime7 = require("react/jsx-runtime");
var LoadingOverlay = import_react3.default.forwardRef((p, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: LoadingOverlay_default.hidden, ref, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: LoadingOverlay_default.container, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "relative h-28 w-28", children: [...Array(12)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_framer_motion.motion.div,
    {
      className: "absolute h-2 w-2 rounded-full bg-white",
      animate: {
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1, 0.8]
      },
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.1
      },
      style: {
        top: `calc(50% + ${Math.sin(i * Math.PI / 6) * 30}px)`,
        left: `calc(50% + ${Math.cos(i * Math.PI / 6) * 30}px)`,
        transform: "translate(-50%, -50%)"
      }
    },
    i
  )) }) }) });
});
var LoadingOverlay_default2 = LoadingOverlay;
var LoadingOverlayContext = import_react3.default.createContext(
  () => {
  }
);

// src/components/common/HollowButton/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var HollowButton = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Button_default,
    {
      style: {
        backgroundColor: "transparent",
        border: "solid 2px #0c6588",
        color: "#0c6588"
      },
      ...props
    }
  );
};
var HollowButton_default = HollowButton;

// src/components/common/YellowButton/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var YellowButton = (props) => {
  const { text, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "yellowButton", ...rest, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: text })
  ] });
};
var YellowButton_default = YellowButton;

// src/components/common/FlexFieldRow/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var FieldFlexRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flexFieldRow", ...rest, children });
};
var FlexFieldRow_default = FieldFlexRow;

// src/components/common/ImageContainer/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var ImageContainer = (props) => {
  const {
    src = void 0,
    alt = "No image found",
    loading = false,
    ...rest
  } = props;
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "skeleton", ...rest });
  } else {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "imageContainer", ...rest, children: src ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "img",
      {
        src,
        alt,
        style: { width: "100%", height: "100%" },
        loading: "eager",
        onError: (e) => {
          const target = e.target;
          target.onerror = null;
          target.src = "/images/lucid-placeholder.png";
        }
      }
    ) : null });
  }
};
var ImageContainer_default = ImageContainer;

// src/components/common/FlexRow/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var FlexRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flexRow", ...rest, children });
};
var FlexRow_default = FlexRow;

// src/components/common/InfoContainer/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var InfoContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "infoContainer", ...rest, children });
};
var InfoContainer_default = InfoContainer;

// src/components/common/ColumnContainer/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var ColumnContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "columnContainer", ...rest, children });
};
var ColumnContainer_default = ColumnContainer;

// src/components/common/ContainerLabel/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var ContainerLabel = (props) => {
  const { img, text, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "containerLabel", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "imageContainer", children: img ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: img, alt: "LabelIcon" }) : children }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "dark:text-muted", children: text })
  ] });
};
var ContainerLabel_default = ContainerLabel;

// src/components/common/FieldSetTextArea/index.tsx
var import_react4 = __toESM(require("react"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var FieldSetTextArea = import_react4.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("fieldset", { className: "fieldsetTextArea", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("legend", { children: props.placeholder }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("textarea", { ...props, ref })
  ] }) });
});
var FieldSetTextArea_default = FieldSetTextArea;

// src/values/colors.ts
var colors = {
  primary: "var(--primary-color)",
  primary_filter: "var(--primary-color-filter)",
  black: "var(--black)",
  red: "var(--red)",
  gray: "var(--gray)"
};
var colors_default = colors;

// src/values/skeleton.ts
var skeletonSizes = /* @__PURE__ */ ((skeletonSizes2) => {
  skeletonSizes2["small"] = "10rem";
  skeletonSizes2["medium"] = "12rem";
  skeletonSizes2["wide"] = "15rem";
  return skeletonSizes2;
})(skeletonSizes || {});
var skeleton_default = skeletonSizes;

// src/components/common/LabelContentComponent/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var LabelContentComponent = (props) => {
  const {
    children,
    label = "Label",
    content = "",
    loading = false,
    size = skeleton_default.small,
    highlight,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "labelContentContainer", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: `label dark:text-accent-foreground`, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "content", children: [
      loading ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "skeleton", style: { width: `${size}` }, children: content }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "span",
        {
          className: `${highlight ? "text-orange" : "dark:text-white"} ${content === "--no change--" ? "italic" : ""}`,
          children: content == "" ? "No Information" : content
        }
      ),
      children
    ] })
  ] });
};
var LabelContentComponent_default = LabelContentComponent;

// src/components/common/LabelContentContainer/index.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var LabelContentContainer = (props) => {
  const { header, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "labelContentContainer", ...rest, children: [
    header ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "labelContentContainerHeader", children: header }) : null,
    children
  ] });
};
var LabelContentContainer_default = LabelContentContainer;

// src/components/common/LabelContentContainerNoPadding/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var LabelContentContainerNoPadding = (props) => {
  const { header, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "labelContentContainerPadding", ...rest, children: [
    header ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "labelContentContainerHeader", children: header }) : null,
    children
  ] });
};
var LabelContentContainerNoPadding_default = LabelContentContainerNoPadding;

// src/components/common/SkeletonSpan/index.scss
var SkeletonSpan_default = {};

// src/components/common/SkeletonSpan/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var SkeletonSpan = (props) => {
  const { size = skeleton_default.wide, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { className: SkeletonSpan_default.skeleton, ...rest, style: { width: `${size}` }, children: "" });
};
var SkeletonSpan_default2 = SkeletonSpan;

// src/components/common/ContentGrid/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var ContentGrid = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "contentGrid", ...rest, children });
};
var ContentGrid_default = ContentGrid;

// src/components/common/MatrixInput/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var MatrixInput = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "form-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "border border-secondary bg-secondary text-background dark:text-foreground", children: props.title }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "input",
      {
        className: cn(
          "form-field",
          "border border-secondary bg-transparent text-primary dark:text-foreground"
        ),
        type: props.type || "text",
        placeholder: "0.00",
        ...props
      }
    )
  ] });
};
var MatrixInput_default = MatrixInput;

// src/components/common/FlexiRowMatrix/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var FlexiRowMatrix = (props) => {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: {}, children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "title", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "FlexiRowMatrix", ...rest, children })
  ] }) });
};
var FlexiRowMatrix_default = FlexiRowMatrix;

// src/components/common/FlexiRowMatrixLeftAlign/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var FlexiRowMatrixLeftAlign = (props) => {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { style: {}, children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "title", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flexiRowMatrixLeftAlign", ...rest, children })
  ] }) });
};
var FlexiRowMatrixLeftAlign_default = FlexiRowMatrixLeftAlign;

// src/components/common/ModalDivider/index.scss
var ModalDivider_default = {};

// src/components/common/ModalDivider/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var ModalDivider = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: ModalDivider_default.Divider, children });
};
var LeftSideUpPart = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: ModalDivider_default.leftSide, children });
};
var RightSideDownPart = (props) => {
  const { children, header } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { style: { fontWeight: "bold" }, children: header }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "right", children })
  ] }) });
};
var Divider = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: ModalDivider_default.divider });
};
var ModalDivider_default2 = ModalDivider;

// src/components/common/SideFilterStationary/index.tsx
var import_fa2 = require("react-icons/fa");

// src/components/common/SideFilterStationary/index.scss
var SideFilterStationary_default = {};

// src/components/common/SideFilterStationary/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var SideFilterStationary = (props) => {
  const {
    header = "Filter Option",
    isOpen = true,
    toggleSideNav = () => {
    },
    children,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      className: `${isOpen ? "sideFilter" : "sideFilterHidden2"} dark:bg-primary`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: SideFilterStationary_default.hideButton, onClick: toggleSideNav, children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "dark:text-white", children: header }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("hr", { className: SideFilterStationary_default.line }),
          isOpen ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_fa2.FaChevronCircleUp, { size: "1.3rem", className: "hiddenOnBigScreen" }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_fa2.FaChevronCircleDown, { size: "1.3rem", className: "hiddenOnBigScreen" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "div",
          {
            className: isOpen ? "filterFieldContainer" : "filterFieldContainerHidden",
            children
          }
        )
      ]
    }
  );
};

// src/components/common/FilterToggle/index.tsx
var import_react5 = require("react");

// src/components/common/FilterToggle/index.scss
var FilterToggle_default = {};

// src/components/common/FilterToggle/index.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var FilterToggle = (props) => {
  const {
    value = true,
    onChange = () => {
    },
    disabled = false,
    name = ""
  } = props;
  const toggleRef = (0, import_react5.useRef)(true);
  const markerRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    toggleRef.current = value;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", value.toString());
  }, [value]);
  const toggleYes = (0, import_react5.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = (0, import_react5.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "toggleContainer", "data-disabled": disabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { onClick: toggleYes, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "For Approval" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { onClick: toggleNo, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "History" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: FilterToggle_default.marker, ref: markerRef })
  ] });
};
var FilterToggle_default2 = FilterToggle;

// src/components/common/FormFormatter/FormContentGrid/index.module.scss
var index_module_default = {};

// src/components/common/FormFormatter/FormContentGrid/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var FormContentGrid = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: index_module_default.grid, ...rest, children });
};
var FormContentGrid_default = FormContentGrid;

// src/components/common/FormFormatter/FormContentNav/index.module.scss
var index_module_default2 = {};

// src/components/common/FormFormatter/FormContentNav/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var FormContentNav = (props) => {
  const { routes } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("nav", { className: index_module_default2.navBar, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: index_module_default2.navArea, children: routes.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "a",
    {
      className: s === props.value ? index_module_default2.selectedNavItem : index_module_default2.navItem,
      onClick: () => props.onSelect(s),
      children: s
    },
    i
  )) }) }) });
};
var FormContentNav_default = FormContentNav;

// src/components/common/FormFormatter/FormSection/index.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var FormSection = (props) => {
  const { sectionName, selectedSection, children, ...rest } = props;
  if (selectedSection === sectionName)
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ColumnContainer_default, { className: "formSection", ...rest, children });
  else {
    return null;
  }
};
var FormSection_default = FormSection;

// src/components/common/ButtonContainerNoWrap/index.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var ButtonContainerNoWrap = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "buttonContainerNoWrap", ...rest, children });
};
var ButtonContainerNoWrap_default = ButtonContainerNoWrap;

// src/components/common/ListMakerComponent/index.tsx
var import_react6 = require("react");

// src/components/common/ListMakerComponent/index.scss
var ListMakerComponent_default = {};

// src/components/common/ListMakerComponent/index.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function ListMaker(props) {
  const {
    children,
    label = "Feedbacks",
    data,
    onRemove = null,
    onOpen = null,
    binding,
    hasAttachments = false,
    disabled = false,
    loading = false,
    ...rest
  } = props;
  const [innerData, setInnerData] = (0, import_react6.useState)(data);
  (0, import_react6.useEffect)(() => {
    setInnerData(data);
  }, [data]);
  const onItemRemove = (item) => {
    if (!onRemove) {
      return;
    }
    onRemove(item);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "listMakerContainer", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "listMakerHeader", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "listMakerLabel", children: label }),
      disabled ? null : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { children })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: loading ? ListMakerComponent_default.listContentLoading : ListMakerComponent_default.listContent, children: innerData.length > 0 ? innerData.map((d, i) => {
      let val = "";
      let id = "";
      if (typeof binding !== "function") {
        val = d[binding] + "";
        if (binding === "id") id = d[binding];
      }
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: ListMakerComponent_default.removableRow, children: [
        hasAttachments && onOpen !== null ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "a",
          {
            onClick: () => onOpen(d.data, d.fileExtension),
            style: { cursor: "pointer" },
            children: typeof binding === "function" ? limitCharacters(binding(d)) : val
          },
          i
        ) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("a", { children: typeof binding === "function" ? binding(d) : val }, i),
        disabled ? null : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          Button_default,
          {
            className: ListMakerComponent_default.removeButton,
            onClick: () => onItemRemove(d),
            children: "\u2715"
          }
        )
      ] }, i);
    }) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: ListMakerComponent_default.noItems, children: `No ${label} selected` }) })
  ] });
}
var limitCharacters = (val) => {
  if (typeof val === "string") {
    let extension = val.substring(val.lastIndexOf("."));
    let name = val.substring(0, val.lastIndexOf("."));
    if (name.length > 25) {
      name = name.substring(0, 25) + "..";
    }
    val = name + extension;
    return val;
  }
};
var ListMakerComponent_default2 = ListMaker;

// src/components/common/StepsMaker/index.scss
var StepsMaker_default = {};

// src/components/common/StepsMaker/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var StepsMaker = (props) => {
  const { data = [], stepValue = 0 } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "stepRow", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "hr",
      {
        style: data.length > 6 ? { width: "90%" } : { width: "80%" },
        className: StepsMaker_default.line
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "hr",
      {
        className: "loadline",
        style: { width: `${(stepValue + 1) / data.length * 100}%` }
      }
    ),
    data.map((x, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "div",
        {
          style: {
            width: "200px",
            justifyContent: "start"
          },
          className: stepValue == i ? "stepColumnActive" : "stepColumn",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "div",
              {
                className: `${stepValue == i ? `outerCircleActive dark:border-white` : "outerCircle dark:border-primary"} dark:bg-primary`,
                children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                  "div",
                  {
                    className: `${stepValue == i ? "innerCircleActive" : "innerCircle"} dark:border-black`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      "h1",
                      {
                        className: `${stepValue == i ? "numberActive dark:text-white" : "number"} `,
                        children: i + 1
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "columnDiv", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("p", { className: "smallText", children: [
                "Step ",
                i + 1,
                " of ",
                data.length
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                "p",
                {
                  style: { textAlign: "center" },
                  className: stepValue == i ? "labelActive dark:text-white" : "label",
                  children: data[i]
                }
              )
            ] })
          ]
        },
        i
      );
    })
  ] });
};
var StepsMaker_default2 = StepsMaker;

// src/components/common/FlexFieldRowWrap/index.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var FieldFlexRowWrap = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "fledFieldRowWrap", ...rest, children });
};
var FlexFieldRowWrap_default = FieldFlexRowWrap;

// src/components/common/ActionContainer/ActionArea.tsx
var import_react7 = __toESM(require("react"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var ActionArea = import_react7.default.forwardRef(
  (props, ref) => {
    const { children, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "actionContainer", ...rest, ref, children });
  }
);
var ActionArea_default = ActionArea;

// src/components/common/ActionContainer/index.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var ActionContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "actionButtonContainer", ...rest, children });
};
var ActionContainer_default = ActionContainer;

// src/components/common/ModalWithOutline/index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var ModalWithOutline = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: show ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: cn("modalBackground", "h-full"), role: "modal-bg", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "div",
    {
      className: cn("modalContainer", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "modalHeaderContainer", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: cn("modalHeader", "text-foreground"), children: header }) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "contentContainer", children })
      ]
    }
  ) }) : null });
};
var ModalWithOutline_default = ModalWithOutline;

// src/components/shad/FieldSetInput/index.module.scss
var index_module_default3 = {};

// src/components/ui/form.tsx
var React9 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_react_hook_form = require("react-hook-form");

// src/components/ui/label.tsx
var React8 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime38 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/form.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React9.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React9.useContext(FormFieldContext);
  const itemContext = React9.useContext(FormItemContext);
  const { getFieldState, formState } = (0, import_react_hook_form.useFormContext)();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React9.createContext(
  {}
);
var FormItem = React9.forwardRef(({ className, ...props }, ref) => {
  const id = React9.useId();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React9.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React9.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    import_react_slot.Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React9.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React9.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";

// src/components/shad/FieldSetInput/FieldSet-Toggle.tsx
var import_react8 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Toggle = (props) => {
  const {
    checked = false,
    onChange = () => {
    },
    disabled = false,
    name = "",
    checkedValue = "YES",
    notCheckedValue = "NO"
  } = props;
  const toggleRef = (0, import_react8.useRef)(false);
  const markerRef = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    toggleRef.current = checked;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", checked.toString());
  }, [checked]);
  const toggleYes = (0, import_react8.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = (0, import_react8.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: index_module_default3.toggleContainer, "data-disabled": disabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { onClick: toggleYes, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: checkedValue }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { onClick: toggleNo, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: notCheckedValue }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: index_module_default3.marker, ref: markerRef, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: checked ? checkedValue : notCheckedValue }) }),
    disabled ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: index_module_default3.disabledLabel, children: checked ? checkedValue : notCheckedValue }) : null
  ] });
};
var FieldSet_Toggle_default = Toggle;

// src/components/shad/FieldSetInput/FieldSet-Input.tsx
var import_react_hook_form2 = require("react-hook-form");
var import_moment = __toESM(require("moment"));
var import_jsx_runtime41 = require("react/jsx-runtime");
var toggleInputs2 = ["checkbox", "radio"];
var FieldSetInputCN = (props) => {
  const { control } = (0, import_react_hook_form2.useFormContext)();
  if (toggleInputs2.includes(props.type || "text")) {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_jsx_runtime41.Fragment, {});
  }
  const { name, formatNumber, containerstyle2, placeholder, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(FormItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
            "fieldset",
            {
              className: cn(
                index_module_default3.fieldset,
                "rounded-sm border border-border dark:border-[#568293]  "
              ),
              "input-type": props.type || "text",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                  "legend",
                  {
                    className: cn(
                      "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                    ),
                    children: props.placeholder
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                  "input",
                  {
                    type: props.type || "text",
                    className: cn(
                      "text-bas w-full border-none px-5 py-2 text-foreground placeholder-transparent outline-none disabled:bg-transparent",
                      props.customBG ? "bg-[#e9eff6]" : "bg-white"
                    ),
                    style: props.containerstyle2,
                    ...rest,
                    ...field,
                    value: props.type?.toLowerCase() === "month" && field.value != void 0 ? `${field.value.toString().substring(0, 4)}-${field.value.toString().substring(4)}` : props.type?.toLowerCase() === "date" ? field.value === "" || field.value === null || field.value === void 0 ? "" : (0, import_moment.default)(
                      field.value?.split("T").length > 1 ? field.value?.split("T")[0] : field.value
                    ).format("YYYY-MM-DD") : props.formatNumber ? field.value?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }) : field.value,
                    autoComplete: "off"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(FormMessage, {})
        ] });
      }
    }
  );
};
var FieldSet_Input_default = FieldSetInputCN;

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
var React16 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");

// src/components/ui/command.tsx
var React12 = __toESM(require("react"));
var import_cmdk = require("cmdk");
var import_lucide_react2 = require("lucide-react");

// src/components/ui/dialog.tsx
var React11 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(DialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_lucide_react.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/ui/command.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var Command = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  import_cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md  bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = import_cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
  "div",
  {
    className: "flex items-center border-b px-3 dark:border-[#568293]",
    "cmdk-input-wrapper": "",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react2.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        import_cmdk.Command.Input,
        {
          ref,
          className: cn(
            "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          ),
          ...props
        }
      )
    ]
  }
));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  import_cmdk.Command.List,
  {
    ref,
    className: cn(
      "max-h-[300px] overflow-y-auto overflow-x-hidden ",
      className
    ),
    ...props
  }
));
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React12.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  import_cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  import_cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  import_cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  import_cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none  aria-selected:bg-accent aria-selected:text-primary-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/ui/popover.tsx
var React13 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime44 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React13.forwardRef(({ className, align = "center", sideOffset = 0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-full rounded-md border  bg-popover p-4  text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-[#568293]",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
var import_react_hook_form3 = require("react-hook-form");

// src/components/ui/drawer.tsx
var React14 = __toESM(require("react"));
var import_vaul = require("vaul");
var import_jsx_runtime45 = require("react/jsx-runtime");
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  import_vaul.Drawer.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = import_vaul.Drawer.Trigger;
var DrawerPortal = import_vaul.Drawer.Portal;
var DrawerClose = import_vaul.Drawer.Close;
var DrawerOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  import_vaul.Drawer.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = import_vaul.Drawer.Overlay.displayName;
var DrawerContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(DrawerPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(DrawerOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    import_vaul.Drawer.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  import_vaul.Drawer.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = import_vaul.Drawer.Title.displayName;
var DrawerDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  import_vaul.Drawer.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = import_vaul.Drawer.Description.displayName;

// src/hooks/use-media-query.ts
var React15 = __toESM(require("react"));
function useMediaQuery(query) {
  const [value, setValue] = React15.useState(false);
  React15.useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var FieldSetDropdownForList = ({
  label,
  placeholder,
  description,
  name,
  data,
  disabled = false,
  onChange = (value) => {
  },
  returnVal = (value) => []
}) => {
  const [open, setOpen] = React16.useState(false);
  const { control } = (0, import_react_hook_form3.useFormContext)();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    FormField,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(FormItem, { className: " flex flex-col", children: [
        isDesktop ? /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
          !disabled ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
            "fieldset",
            {
              className: cn(
                index_module_default3.fieldset,
                "w-full rounded-sm border border-border dark:border-[#568293] "
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: [
                  false ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-border", children: placeholder }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react3.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
                ] })
              ]
            }
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("fieldset", { className: cn(index_module_default3.fieldset, "w-full border-none"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: false ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-foreground", children: placeholder }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PopoverContent, { className: "z-[101]  m-0 w-[--radix-popover-trigger-width]  p-0", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            DataListMaker,
            {
              name,
              data,
              fieldValue: field.value,
              setOpen,
              onChange,
              returnVal
            }
          ) })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(Drawer, { open, onOpenChange: setOpen, children: [
          !disabled ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("fieldset", { className: cn(index_module_default3.fieldset, "w-full"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("legend", { className: "text-border dark:text-foreground", children: placeholder }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-0", children: [
              false ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-[0.75rem]", children: data.find((d) => d.value == field.value)?.label }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-[1rem] text-border", children: placeholder }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react3.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
            ] })
          ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("fieldset", { className: cn(index_module_default3.fieldset, "w-full"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("legend", { className: "text-border dark:text-foreground", children: placeholder }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-0", children: false ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-[0.75rem] text-foreground", children: data.find((d) => d.value == field.value)?.label }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-[1rem] text-foreground", children: placeholder }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(DrawerContent, { className: "z-[101]", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "mt-4 border-t", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            DataListMaker,
            {
              name,
              data,
              fieldValue: field.value,
              setOpen,
              onChange,
              returnVal
            }
          ) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FormMessage, {})
      ] })
    }
  );
};
function DataListMaker({
  name,
  data,
  fieldValue,
  setOpen,
  onChange = (value) => {
  },
  returnVal = (value) => []
}) {
  const { setValue } = (0, import_react_hook_form3.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(Command, { className: "w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CommandInput, { placeholder: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(CommandList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CommandGroup, { children: data.map((content) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
        CommandItem,
        {
          value: content.label,
          onSelect: () => {
            setValue(name, returnVal(content.value));
            setOpen(false);
            onChange(content.value);
          },
          children: [
            content.label,
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_lucide_react3.CheckIcon,
              {
                className: cn(
                  "ml-auto h-4 w-4",
                  content.value === fieldValue ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        content.value
      )) })
    ] })
  ] });
}
var FieldSet_Dropdown_ListMaker_default = FieldSetDropdownForList;

// src/components/shad/FieldSetInput/FieldSet-Dropdown.tsx
var React17 = __toESM(require("react"));
var import_lucide_react4 = require("lucide-react");
var import_react_hook_form4 = require("react-hook-form");
var import_jsx_runtime47 = require("react/jsx-runtime");
var FieldSetDropdown = ({
  label,
  placeholder,
  name,
  data,
  disabled = false,
  darkColoredPlaceholder = false,
  onChange = () => {
  }
}) => {
  const [open, setOpen] = React17.useState(false);
  const { control } = (0, import_react_hook_form4.useFormContext)();
  const isDesktop = useMediaQuery("(min-width: 400px) and (min-height: 720px)");
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    FormField,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(FormItem, {
        className: "flex flex-col",
        // isDesktop ?
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
            !disabled ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
              "fieldset",
              {
                className: cn(
                  index_module_default3.fieldset,
                  "w-full rounded-sm border border-border dark:border-[#568293] "
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: [
                    field.value && field.value != -1 ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                      "span",
                      {
                        className: darkColoredPlaceholder ? "text-black" : "text-border",
                        children: placeholder
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react4.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
                  ] })
                ]
              }
            ) }) : /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("fieldset", { className: cn(index_module_default3.fieldset, "w-full border-none"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: field.value && field.value != -1 ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "text-foreground", children: placeholder || "Select from List" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              PopoverContent,
              {
                className: cn(
                  "  z-[101]  w-[--radix-popover-trigger-width] p-0"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  DataListMaker2,
                  {
                    name,
                    data,
                    fieldValue: field.value,
                    setOpen,
                    onChange
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FormMessage, {})
        ]
      })
    }
  );
};
function DataListMaker2({
  name,
  data,
  fieldValue,
  setOpen,
  onChange = (value) => {
  }
}) {
  const { setValue } = (0, import_react_hook_form4.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Command, { className: cn("w-full"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CommandInput, { placeholder: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(CommandList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CommandGroup, { children: data.map((content) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
        CommandItem,
        {
          value: content.label,
          onSelect: () => {
            setValue(name, content.value);
            setOpen(false);
            onChange(content.value);
          },
          children: [
            content.label,
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              import_lucide_react4.CheckIcon,
              {
                className: cn(
                  "ml-auto h-4 w-4",
                  content.value === fieldValue ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        content.value
      )) })
    ] })
  ] });
}
var FieldSet_Dropdown_default = FieldSetDropdown;

// src/components/shad/FieldSetInput/index2.module.scss
var index2_module_default = {};

// src/components/shad/FieldSetInput/FieldSet-Input-Gray.tsx
var import_react_hook_form5 = require("react-hook-form");
var import_moment2 = __toESM(require("moment"));
var import_jsx_runtime48 = require("react/jsx-runtime");
var toggleInputs3 = ["checkbox", "radio"];
var FieldSetInputCN2 = (props) => {
  const { control } = (0, import_react_hook_form5.useFormContext)();
  if (toggleInputs3.includes(props.type || "text")) {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(FormItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
            "fieldset",
            {
              className: cn(
                index2_module_default.fieldset,
                "rounded-sm border border-border dark:border-[#568293]  "
              ),
              "input-type": props.type || "text",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                  "legend",
                  {
                    className: cn(
                      "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                    ),
                    children: props.placeholder
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                  "input",
                  {
                    className: cn(
                      "text-bas w-full border-none px-5 py-2 text-foreground placeholder-transparent outline-none disabled:bg-transparent",
                      props.customBG ? "bg-[#e9eff6]" : "bg-white"
                    ),
                    style: props.containerstyle2,
                    ...field,
                    ...props,
                    value: props.type?.toLowerCase() === "date" ? (0, import_moment2.default)(
                      field.value?.split("T").length > 1 ? field.value?.split("T")[0] : field.value
                    ).format("YYYY-MM-DD") : props.type?.toLowerCase() === "time" ? (0, import_moment2.default)(field.value).format("HH:mm") : field.value,
                    autoComplete: "off"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(FormMessage, {})
        ] });
      }
    }
  );
};
var FieldSet_Input_Gray_default = FieldSetInputCN2;

// src/components/shad/FieldSetInput/FieldSet-MatrixInput.tsx
var import_react_hook_form6 = require("react-hook-form");

// src/components/shad/FieldSetInput/matrix.module.scss
var matrix_module_default = {};

// src/components/shad/FieldSetInput/FieldSet-MatrixInput.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var FieldSetMatrix = (props) => {
  const { control } = (0, import_react_hook_form6.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(FormItem, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: cn(matrix_module_default.formGroup, "w-full"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "border border-secondary bg-secondary text-background dark:text-foreground", children: props.title }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          "input",
          {
            className: cn(
              matrix_module_default.formField,
              "border border-secondary bg-transparent text-primary dark:text-foreground"
            ),
            type: props.type || "text",
            placeholder: "0.00",
            ...props,
            ...field
          }
        )
      ] }) }) })
    }
  );
};
var FieldSet_MatrixInput_default = FieldSetMatrix;

// src/components/shad/FieldSetInput/FieldSet-TextArea.tsx
var import_react9 = __toESM(require("react"));
var import_react_hook_form7 = require("react-hook-form");
var import_jsx_runtime50 = require("react/jsx-runtime");
var FieldSetTextAreaCN = import_react9.default.forwardRef((props, ref) => {
  const { control } = (0, import_react_hook_form7.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          "fieldset",
          {
            className: cn(
              index_module_default3.fieldset,
              "rounded-sm border border-border dark:border-[#568293] "
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("legend", { className: "text-border dark:text-[#568293]", children: props.placeholder }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("textarea", { ...props, ...field, ref: field.ref })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(FormMessage, {})
      ] })
    }
  ) });
});
var FieldSet_TextArea_default = FieldSetTextAreaCN;

// src/components/shad/FlexField.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
var FlexField = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex-1", ...rest, children });
};
var FlexField_default = FlexField;

// src/components/shad/FlexFieldRow2.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
var FieldFlexRow2 = (props) => {
  const { children, className, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    "div",
    {
      className: cn(
        "flex flex-col justify-start gap-4 flex-wrap md:flex-row",
        className
      ),
      ...rest,
      children
    }
  );
};
var FlexFieldRow2_default = FieldFlexRow2;

// src/components/shad/MatrixFlexiRowLeftAlign.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var MatrixFlexiRowLeftAlign = ({
  title,
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { style: {}, children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "mb-[5px] flex text-[14px]", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      "div",
      {
        className: "relative ml-[10px] flex w-[50%] min-w-[150px] flex-col items-baseline justify-start gap-[10px] sm:w-auto sm:min-w-min sm:flex-row sm:gap-[30px]",
        ...rest,
        children
      }
    )
  ] });
};
var MatrixFlexiRowLeftAlign_default = MatrixFlexiRowLeftAlign;

// src/components/shad/lucid-button.tsx
var React20 = __toESM(require("react"));

// src/components/ui/button.tsx
var React19 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime54 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-wrap",
  {
    variants: {
      variant: {
        yellow: "bg-[#d28c00] text-background dark:text-foreground  hover:bg-[#d28c00]/90 ",
        default: "bg-secondary text-background dark:text-foreground hover:bg-secondary/10",
        destructive: "bg-red-700  text-destructive-foreground hover:bg-red-700/90",
        outline: "border-2 border-secondary hover:bg-secondary hover:text-background dark:hover:text-foreground ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-secondary dark:text-foreground underline-offset-4 hover:underline",
        green: "bg-green-800 text-background dark:text-foreground hover:bg-green-800/90"
      },
      size: {
        // default: "h-10 px-4 py-2",
        default: "text-base min-h-[2rem] min-w-[2rem] p-[0.3rem] sm:px-[10px] sm:py-[5px] font-bold leading-none",
        sm: "min-w-[5.5rem] p-[0.6rem] text-[0.75rem] rounded-[5px] font-bold",
        sm_noPadding: "text-[0.75rem]  font-bold",
        lg: " h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React19.forwardRef(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      Comp,
      {
        type: type ? type : "button",
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/shad/lucid-button.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
var LucidButton = React20.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
      Button,
      {
        ref,
        variant: "ghost",
        className: cn(
          "bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-900 font-bold rounded-xl",
          className,
          index_module_default3.fieldset
        ),
        ...props,
        children: [
          "Lucid ",
          children
        ]
      }
    );
  }
);
var lucid_button_default = LucidButton;

// src/components/ui/alert-dialog.tsx
var React21 = __toESM(require("react"));
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime56 = require("react/jsx-runtime");
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(AlertDialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/components/ui/avatar.tsx
var React22 = __toESM(require("react"));
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime57 = require("react/jsx-runtime");
var Avatar = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/ui/calendar.tsx
var import_lucide_react5 = require("lucide-react");
var import_react_day_picker = require("react-day-picker");
var import_jsx_runtime58 = require("react/jsx-runtime");
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_lucide_react5.ChevronLeft, { className: cn("h-4 w-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_lucide_react5.ChevronRight, { className: cn("h-4 w-4", className2), ...props2 })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";

// src/components/ui/card.tsx
var React23 = __toESM(require("react"));
var import_jsx_runtime59 = require("react/jsx-runtime");
var Card = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/checkbox.tsx
var React24 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime60 = require("react/jsx-runtime");
var Checkbox = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-background"),
        children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_lucide_react6.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/input.tsx
var React25 = __toESM(require("react"));
var import_jsx_runtime61 = require("react/jsx-runtime");
var Input = React25.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ui/dropdown-menu.tsx
var React26 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime62 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React26.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_lucide_react7.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React26.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React26.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React26.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_lucide_react7.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React26.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_lucide_react7.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React26.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/ui/light-dark-toggle.tsx
var import_react10 = require("react");

// src/components/ui/tooltip.tsx
var React27 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime63 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React27.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/ui/light-dark-toggle.tsx
var import_lucide_react8 = require("lucide-react");
var import_cookies_next = require("cookies-next");
var import_jsx_runtime64 = require("react/jsx-runtime");

// src/components/ui/radio-group.tsx
var React28 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime65 = require("react/jsx-runtime");
var RadioGroup2 = React28.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup2.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React28.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_react9.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ui/scroll-area.tsx
var React29 = __toESM(require("react"));
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"));
var import_jsx_runtime66 = require("react/jsx-runtime");
var ScrollArea = React29.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ScrollBar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React29.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/ui/select.tsx
var React30 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime67 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React30.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_lucide_react10.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_lucide_react10.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_lucide_react10.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React30.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SelectScrollUpButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React30.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_lucide_react10.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ui/toggle-group.tsx
var React36 = __toESM(require("react"));
var ToggleGroupPrimitive = __toESM(require("@radix-ui/react-toggle-group"));

// src/components/ui/toggle.tsx
var React35 = __toESM(require("react"));

// node_modules/@radix-ui/react-toggle/dist/index.mjs
var React34 = __toESM(require("react"), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React32 = __toESM(require("react"), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React31 = __toESM(require("react"), 1);
var useLayoutEffect2 = globalThis?.document ? React31.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React210 = __toESM(require("react"), 1);
var useInsertionEffect = React32[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React32.useRef(prop !== void 0);
    React32.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React32.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React32.useState(defaultProp);
  const prevValueRef = React32.useRef(value);
  const onChangeRef = React32.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React32.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React33 = __toESM(require("react"), 1);
var ReactDOM = __toESM(require("react-dom"), 1);
var import_react_slot3 = require("@radix-ui/react-slot");
var import_jsx_runtime68 = require("react/jsx-runtime");
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot3 = (0, import_react_slot3.createSlot)(`Primitive.${node}`);
  const Node = React33.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-toggle/dist/index.mjs
var import_jsx_runtime69 = require("react/jsx-runtime");
var NAME = "Toggle";
var Toggle2 = React34.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
  const [pressed, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed ?? false,
    caller: NAME
  });
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle2.displayName = NAME;
var Root12 = Toggle2;

// src/components/ui/toggle.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime70 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority3.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle3 = React35.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
  Root12,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle3.displayName = Root12.displayName;

// src/components/ui/toggle-group.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
var ToggleGroupContext = React36.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React36.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React36.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React36.useContext(ToggleGroupContext);
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    ToggleGroupPrimitive.Item,
    {
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionArea,
  ActionContainer,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  ButtonContainer,
  ButtonContainerNoWrap,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ColumnContainer,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContainerLabel,
  ContentGrid,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Divider,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  FieldSetInput,
  FieldSetTextArea,
  FieldSetTextAreaCN,
  FilterToggle,
  FlexFieldRow,
  FlexFieldRowWrap,
  FlexRow,
  FlexiRowMatrix,
  FlexiRowMatrixLeftAlign,
  Footer,
  Form,
  FormContentGrid,
  FormContentNav,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  HollowButton,
  ImageContainer,
  InfoContainer,
  Input,
  Label,
  LabelContentComponent,
  LabelContentContainer,
  LabelContentContainerNoPadding,
  LeftSideUpPart,
  ListMakerComponent,
  LoadingOverlay,
  LucidButton,
  MatrixInput,
  Modal,
  ModalDivider,
  ModelWithOutline,
  NormalButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  RightSideDownPart,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ShadFieldSetDropdown,
  ShadFieldSetDropdownListMaker,
  ShadFieldSetInput,
  ShadFieldSetInputGray,
  ShadFieldSetMatrixInput,
  ShadFieldSetToggle,
  ShadFlexField,
  ShadFlexFieldRow2,
  ShadMatrixFlexiRowLeftAlign,
  SideFilterStationary,
  SkeletonSpan,
  StepsMaker,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  YellowButton,
  buttonVariants,
  colors,
  skeletonSizes,
  toggleVariants,
  useFormField
});
//# sourceMappingURL=index.js.map