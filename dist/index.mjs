// src/components/common/Button/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var NormalButton = (props) => {
  const { text, shrink = false, children, type, ...rest } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: shrink ? "buttonSmall" : "button",
      ...rest,
      type: type ? type : "button",
      children: [
        children,
        text ? /* @__PURE__ */ jsx("span", { children: text }) : null
      ]
    }
  );
};
var Button_default = NormalButton;

// src/components/common/ButtonContainer/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ButtonContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx2("div", { className: "buttonContainer", ...rest, children });
};
var ButtonContainer_default = ButtonContainer;

// src/components/common/Modal/index.scss
var Modal_default = {};

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/common/Modal/index.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ jsx3(Fragment, { children: show ? /* @__PURE__ */ jsx3("div", { className: cn("modalBackground", "h-full"), role: "modal-bg", children: /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn("modalBackground", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ jsx3("div", { className: Modal_default.modalHeaderContainer, children: /* @__PURE__ */ jsx3("span", { className: cn(Modal_default.modalHeader, "text-foreground"), children: header }) }),
        /* @__PURE__ */ jsx3("div", { className: Modal_default.contentContainer, children })
      ]
    }
  ) }) : null });
};
var Modal_default2 = Modal;

// src/components/common/Footer/index.tsx
import { Suspense } from "react";

// src/components/common/Footer/index.scss
var Footer_default = {};

// src/components/common/Footer/index.tsx
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsx4(Suspense, { fallback: /* @__PURE__ */ jsx4(Fragment2, {}), children: /* @__PURE__ */ jsxs3("footer", { className: `footer dark:bg-accent`, children: [
    /* @__PURE__ */ jsxs3("div", { className: "footerContainer", style: { flex: "2" }, children: [
      /* @__PURE__ */ jsx4("span", { className: "dark:text-foreground", children: "ABOUT THE PROVIDER" }),
      /* @__PURE__ */ jsx4("span", { className: `${Footer_default.aboutText} dark:text-accent-foreground`, children: "LUCID IT SOLUTIONS is an IT Business Consulting Firm with a goal of providing the right end-to-end business solution to our clients." }),
      /* @__PURE__ */ jsx4("a", { href: "https://luciditsolutions.com/", target: "_blank", children: "Learn more..." })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "footerContainer", children: [
      /* @__PURE__ */ jsx4("span", { className: "dark:text-foreground", children: "LINKS" }),
      /* @__PURE__ */ jsx4("a", { href: "#", children: "Terms of Services" }),
      /* @__PURE__ */ jsx4("a", { href: "#", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx4("a", { href: "#", children: "BIR WIthholding Tax" }),
      /* @__PURE__ */ jsx4("a", { href: "#", children: "Social Security System" }),
      /* @__PURE__ */ jsx4("a", { href: "#", children: "Phil Health" })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "footerContainer", style: { flex: "1.2" }, children: [
      /* @__PURE__ */ jsx4("span", { className: "dark:text-foreground", children: "GET IN TOUCH" }),
      /* @__PURE__ */ jsx4("span", { className: `dark:text-accent-foreground`, children: "For concerns or issues, contact us at" }),
      /* @__PURE__ */ jsxs3("div", { className: "iconThenText", children: [
        /* @__PURE__ */ jsx4(FaEnvelope, {}),
        /* @__PURE__ */ jsx4("span", { className: "dark:text-foreground", children: "info@luciditsolution.com" })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "iconThenText", children: [
        /* @__PURE__ */ jsx4(FaPhoneAlt, {}),
        /* @__PURE__ */ jsx4("span", { className: "dark:text-foreground", children: "+632 8571 2262" })
      ] }),
      /* @__PURE__ */ jsxs3(ButtonContainer_default, { style: { justifyContent: "flex-start" }, children: [
        /* @__PURE__ */ jsx4("span", { className: "iconLink", children: /* @__PURE__ */ jsx4(FaFacebookF, { fill: "white" }) }),
        /* @__PURE__ */ jsx4("span", { className: "iconLink", children: /* @__PURE__ */ jsx4(FaTwitter, { fill: "white" }) }),
        /* @__PURE__ */ jsx4("span", { className: "iconLink", children: /* @__PURE__ */ jsx4(FaLinkedinIn, { fill: "white" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "address", style: { flex: "1.3" }, children: [
      /* @__PURE__ */ jsx4("span", { className: `dark:text-accent-foreground`, children: "\xA9 2017 PAYplusESS. All Rights Reserved." }),
      /* @__PURE__ */ jsx4("span", { className: `dark:text-accent-foreground`, children: "Version 7.2.086" }),
      /* @__PURE__ */ jsxs3("span", { className: `dark:text-accent-foreground`, children: [
        "Designed by",
        " ",
        /* @__PURE__ */ jsx4("p", { className: "text-secondary dark:text-foreground", children: "LUCID I.T. SOLUTIONS" })
      ] })
    ] })
  ] }) });
};
var Footer_default2 = Footer;

// src/components/common/FieldSetInput/toggle.tsx
import { useCallback, useEffect, useRef } from "react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";

// src/components/common/FieldSetInput/index.tsx
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var toggleInputs = ["checkbox", "radio"];
var FieldSetInput = (props) => {
  if (toggleInputs.includes(props.type || "text")) {
    return /* @__PURE__ */ jsx6(Fragment3, {});
  }
  const {
    customBG,
    containerstyle,
    type,
    placeholder,
    containerstyle2,
    ...others
  } = props;
  return /* @__PURE__ */ jsx6(Fragment3, { children: /* @__PURE__ */ jsxs5(
    "fieldset",
    {
      className: customBG ? "fieldsetCuston" : "fieldset",
      style: containerstyle,
      "input-type": type || "text",
      children: [
        /* @__PURE__ */ jsx6("legend", { children: placeholder }),
        /* @__PURE__ */ jsx6(
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
import React3, { useCallback as useCallback2, useRef as useRef2 } from "react";

// src/components/common/LoadingOverlay/index.scss
var LoadingOverlay_default = {};

// src/components/common/LoadingOverlay/index.tsx
import { motion } from "framer-motion";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var LoadingOverlay = React3.forwardRef((p, ref) => {
  return /* @__PURE__ */ jsx7("div", { className: LoadingOverlay_default.hidden, ref, children: /* @__PURE__ */ jsx7("div", { className: LoadingOverlay_default.container, children: /* @__PURE__ */ jsx7("div", { className: "relative h-28 w-28", children: [...Array(12)].map((_, i) => /* @__PURE__ */ jsx7(
    motion.div,
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
var LoadingOverlayContext = React3.createContext(
  () => {
  }
);

// src/components/common/HollowButton/index.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var HollowButton = (props) => {
  return /* @__PURE__ */ jsx8(
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
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var YellowButton = (props) => {
  const { text, children, ...rest } = props;
  return /* @__PURE__ */ jsxs7("button", { className: "yellowButton", ...rest, children: [
    children,
    /* @__PURE__ */ jsx9("span", { children: text })
  ] });
};
var YellowButton_default = YellowButton;

// src/components/common/FlexFieldRow/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var FieldFlexRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx10("div", { className: "flexFieldRow", ...rest, children });
};
var FlexFieldRow_default = FieldFlexRow;

// src/components/common/ImageContainer/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var ImageContainer = (props) => {
  const {
    src = void 0,
    alt = "No image found",
    loading = false,
    ...rest
  } = props;
  if (loading) {
    return /* @__PURE__ */ jsx11("div", { className: "skeleton", ...rest });
  } else {
    return /* @__PURE__ */ jsx11("div", { className: "imageContainer", ...rest, children: src ? /* @__PURE__ */ jsx11(
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
import { jsx as jsx12 } from "react/jsx-runtime";
var FlexRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx12("div", { className: "flexRow", ...rest, children });
};
var FlexRow_default = FlexRow;

// src/components/common/InfoContainer/index.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var InfoContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx13("div", { className: "infoContainer", ...rest, children });
};
var InfoContainer_default = InfoContainer;

// src/components/common/ColumnContainer/index.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var ColumnContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx14("div", { className: "columnContainer", ...rest, children });
};
var ColumnContainer_default = ColumnContainer;

// src/components/common/ContainerLabel/index.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var ContainerLabel = (props) => {
  const { img, text, children, ...rest } = props;
  return /* @__PURE__ */ jsxs8("div", { className: "containerLabel", ...rest, children: [
    /* @__PURE__ */ jsx15("div", { className: "imageContainer", children: img ? /* @__PURE__ */ jsx15("img", { src: img, alt: "LabelIcon" }) : children }),
    /* @__PURE__ */ jsx15("span", { className: "dark:text-muted", children: text })
  ] });
};
var ContainerLabel_default = ContainerLabel;

// src/components/common/FieldSetTextArea/index.tsx
import React4 from "react";
import { Fragment as Fragment4, jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var FieldSetTextArea = React4.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx16(Fragment4, { children: /* @__PURE__ */ jsxs9("fieldset", { className: "fieldsetTextArea", children: [
    /* @__PURE__ */ jsx16("legend", { children: props.placeholder }),
    /* @__PURE__ */ jsx16("textarea", { ...props, ref })
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
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs10("div", { className: "labelContentContainer", ...rest, children: [
    /* @__PURE__ */ jsx17("span", { className: `label dark:text-accent-foreground`, children: label }),
    /* @__PURE__ */ jsxs10("div", { className: "content", children: [
      loading ? /* @__PURE__ */ jsx17("span", { className: "skeleton", style: { width: `${size}` }, children: content }) : /* @__PURE__ */ jsx17(
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
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var LabelContentContainer = (props) => {
  const { header, children, ...rest } = props;
  return /* @__PURE__ */ jsxs11("div", { className: "labelContentContainer", ...rest, children: [
    header ? /* @__PURE__ */ jsx18("span", { className: "labelContentContainerHeader", children: header }) : null,
    children
  ] });
};
var LabelContentContainer_default = LabelContentContainer;

// src/components/common/LabelContentContainerNoPadding/index.tsx
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var LabelContentContainerNoPadding = (props) => {
  const { header, children, ...rest } = props;
  return /* @__PURE__ */ jsxs12("div", { className: "labelContentContainerPadding", ...rest, children: [
    header ? /* @__PURE__ */ jsx19("span", { className: "labelContentContainerHeader", children: header }) : null,
    children
  ] });
};
var LabelContentContainerNoPadding_default = LabelContentContainerNoPadding;

// src/components/common/SkeletonSpan/index.scss
var SkeletonSpan_default = {};

// src/components/common/SkeletonSpan/index.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var SkeletonSpan = (props) => {
  const { size = skeleton_default.wide, ...rest } = props;
  return /* @__PURE__ */ jsx20("h1", { className: SkeletonSpan_default.skeleton, ...rest, style: { width: `${size}` }, children: "" });
};
var SkeletonSpan_default2 = SkeletonSpan;

// src/components/common/ContentGrid/index.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
var ContentGrid = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx21("div", { className: "contentGrid", ...rest, children });
};
var ContentGrid_default = ContentGrid;

// src/components/common/MatrixInput/index.tsx
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";
var MatrixInput = (props) => {
  return /* @__PURE__ */ jsxs13("div", { className: "form-group", children: [
    /* @__PURE__ */ jsx22("span", { className: "border border-secondary bg-secondary text-background dark:text-foreground", children: props.title }),
    /* @__PURE__ */ jsx22(
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
import { Fragment as Fragment5, jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";
var FlexiRowMatrix = (props) => {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ jsx23(Fragment5, { children: /* @__PURE__ */ jsxs14("div", { style: {}, children: [
    /* @__PURE__ */ jsx23("div", { className: "title", children: title }),
    /* @__PURE__ */ jsx23("div", { className: "FlexiRowMatrix", ...rest, children })
  ] }) });
};
var FlexiRowMatrix_default = FlexiRowMatrix;

// src/components/common/FlexiRowMatrixLeftAlign/index.tsx
import { Fragment as Fragment6, jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";
var FlexiRowMatrixLeftAlign = (props) => {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ jsx24(Fragment6, { children: /* @__PURE__ */ jsxs15("div", { style: {}, children: [
    /* @__PURE__ */ jsx24("div", { className: "title", children: title }),
    /* @__PURE__ */ jsx24("div", { className: "flexiRowMatrixLeftAlign", ...rest, children })
  ] }) });
};
var FlexiRowMatrixLeftAlign_default = FlexiRowMatrixLeftAlign;

// src/components/common/ModalDivider/index.scss
var ModalDivider_default = {};

// src/components/common/ModalDivider/index.tsx
import { Fragment as Fragment7, jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
var ModalDivider = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx25("div", { className: ModalDivider_default.Divider, children });
};
var LeftSideUpPart = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx25("div", { className: ModalDivider_default.leftSide, children });
};
var RightSideDownPart = (props) => {
  const { children, header } = props;
  return /* @__PURE__ */ jsx25(Fragment7, { children: /* @__PURE__ */ jsxs16("div", { children: [
    /* @__PURE__ */ jsx25("label", { style: { fontWeight: "bold" }, children: header }),
    /* @__PURE__ */ jsx25("div", { className: "right", children })
  ] }) });
};
var Divider = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx25("div", { className: ModalDivider_default.divider });
};
var ModalDivider_default2 = ModalDivider;

// src/components/common/SideFilterStationary/index.tsx
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

// src/components/common/SideFilterStationary/index.scss
var SideFilterStationary_default = {};

// src/components/common/SideFilterStationary/index.tsx
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
var SideFilterStationary = (props) => {
  const {
    header = "Filter Option",
    isOpen = true,
    toggleSideNav = () => {
    },
    children,
    ...rest
  } = props;
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      className: `${isOpen ? "sideFilter" : "sideFilterHidden2"} dark:bg-primary`,
      children: [
        /* @__PURE__ */ jsxs17("div", { className: SideFilterStationary_default.hideButton, onClick: toggleSideNav, children: [
          /* @__PURE__ */ jsx26("div", { className: "dark:text-white", children: header }),
          /* @__PURE__ */ jsx26("hr", { className: SideFilterStationary_default.line }),
          isOpen ? /* @__PURE__ */ jsx26(FaChevronCircleUp, { size: "1.3rem", className: "hiddenOnBigScreen" }) : /* @__PURE__ */ jsx26(FaChevronCircleDown, { size: "1.3rem", className: "hiddenOnBigScreen" })
        ] }),
        /* @__PURE__ */ jsx26(
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
import { useCallback as useCallback3, useEffect as useEffect2, useRef as useRef3 } from "react";

// src/components/common/FilterToggle/index.scss
var FilterToggle_default = {};

// src/components/common/FilterToggle/index.tsx
import { jsx as jsx27, jsxs as jsxs18 } from "react/jsx-runtime";
var FilterToggle = (props) => {
  const {
    value = true,
    onChange = () => {
    },
    disabled = false,
    name = ""
  } = props;
  const toggleRef = useRef3(true);
  const markerRef = useRef3(null);
  useEffect2(() => {
    toggleRef.current = value;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", value.toString());
  }, [value]);
  const toggleYes = useCallback3(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = useCallback3(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return /* @__PURE__ */ jsxs18("div", { className: "toggleContainer", "data-disabled": disabled, children: [
    /* @__PURE__ */ jsx27("span", { onClick: toggleYes, children: /* @__PURE__ */ jsx27("span", { children: "For Approval" }) }),
    /* @__PURE__ */ jsx27("span", { onClick: toggleNo, children: /* @__PURE__ */ jsx27("span", { children: "History" }) }),
    /* @__PURE__ */ jsx27("div", { className: FilterToggle_default.marker, ref: markerRef })
  ] });
};
var FilterToggle_default2 = FilterToggle;

// src/components/common/FormFormatter/FormContentGrid/index.module.scss
var index_module_default = {};

// src/components/common/FormFormatter/FormContentGrid/index.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var FormContentGrid = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx28("div", { className: index_module_default.grid, ...rest, children });
};
var FormContentGrid_default = FormContentGrid;

// src/components/common/FormFormatter/FormContentNav/index.module.scss
var index_module_default2 = {};

// src/components/common/FormFormatter/FormContentNav/index.tsx
import { Fragment as Fragment8, jsx as jsx29 } from "react/jsx-runtime";
var FormContentNav = (props) => {
  const { routes } = props;
  return /* @__PURE__ */ jsx29(Fragment8, { children: /* @__PURE__ */ jsx29("nav", { className: index_module_default2.navBar, children: /* @__PURE__ */ jsx29("div", { className: index_module_default2.navArea, children: routes.map((s, i) => /* @__PURE__ */ jsx29(
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
import { jsx as jsx30 } from "react/jsx-runtime";
var FormSection = (props) => {
  const { sectionName, selectedSection, children, ...rest } = props;
  if (selectedSection === sectionName)
    return /* @__PURE__ */ jsx30(ColumnContainer_default, { className: "formSection", ...rest, children });
  else {
    return null;
  }
};
var FormSection_default = FormSection;

// src/components/common/ButtonContainerNoWrap/index.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
var ButtonContainerNoWrap = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx31("div", { className: "buttonContainerNoWrap", ...rest, children });
};
var ButtonContainerNoWrap_default = ButtonContainerNoWrap;

// src/components/common/ListMakerComponent/index.tsx
import { useEffect as useEffect3, useState } from "react";

// src/components/common/ListMakerComponent/index.scss
var ListMakerComponent_default = {};

// src/components/common/ListMakerComponent/index.tsx
import { jsx as jsx32, jsxs as jsxs19 } from "react/jsx-runtime";
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
  const [innerData, setInnerData] = useState(data);
  useEffect3(() => {
    setInnerData(data);
  }, [data]);
  const onItemRemove = (item) => {
    if (!onRemove) {
      return;
    }
    onRemove(item);
  };
  return /* @__PURE__ */ jsxs19("div", { className: "listMakerContainer", ...rest, children: [
    /* @__PURE__ */ jsxs19("div", { className: "listMakerHeader", children: [
      /* @__PURE__ */ jsx32("span", { className: "listMakerLabel", children: label }),
      disabled ? null : /* @__PURE__ */ jsx32("div", { children })
    ] }),
    /* @__PURE__ */ jsx32("div", { className: loading ? ListMakerComponent_default.listContentLoading : ListMakerComponent_default.listContent, children: innerData.length > 0 ? innerData.map((d, i) => {
      let val = "";
      let id = "";
      if (typeof binding !== "function") {
        val = d[binding] + "";
        if (binding === "id") id = d[binding];
      }
      return /* @__PURE__ */ jsxs19("div", { className: ListMakerComponent_default.removableRow, children: [
        hasAttachments && onOpen !== null ? /* @__PURE__ */ jsx32(
          "a",
          {
            onClick: () => onOpen(d.data, d.fileExtension),
            style: { cursor: "pointer" },
            children: typeof binding === "function" ? limitCharacters(binding(d)) : val
          },
          i
        ) : /* @__PURE__ */ jsx32("a", { children: typeof binding === "function" ? binding(d) : val }, i),
        disabled ? null : /* @__PURE__ */ jsx32(
          Button_default,
          {
            className: ListMakerComponent_default.removeButton,
            onClick: () => onItemRemove(d),
            children: "\u2715"
          }
        )
      ] }, i);
    }) : /* @__PURE__ */ jsx32("div", { className: ListMakerComponent_default.noItems, children: `No ${label} selected` }) })
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
import { jsx as jsx33, jsxs as jsxs20 } from "react/jsx-runtime";
var StepsMaker = (props) => {
  const { data = [], stepValue = 0 } = props;
  return /* @__PURE__ */ jsxs20("div", { className: "stepRow", children: [
    /* @__PURE__ */ jsx33(
      "hr",
      {
        style: data.length > 6 ? { width: "90%" } : { width: "80%" },
        className: StepsMaker_default.line
      }
    ),
    /* @__PURE__ */ jsx33(
      "hr",
      {
        className: "loadline",
        style: { width: `${(stepValue + 1) / data.length * 100}%` }
      }
    ),
    data.map((x, i) => {
      return /* @__PURE__ */ jsxs20(
        "div",
        {
          style: {
            width: "200px",
            justifyContent: "start"
          },
          className: stepValue == i ? "stepColumnActive" : "stepColumn",
          children: [
            /* @__PURE__ */ jsx33(
              "div",
              {
                className: `${stepValue == i ? `outerCircleActive dark:border-white` : "outerCircle dark:border-primary"} dark:bg-primary`,
                children: /* @__PURE__ */ jsx33(
                  "div",
                  {
                    className: `${stepValue == i ? "innerCircleActive" : "innerCircle"} dark:border-black`,
                    children: /* @__PURE__ */ jsx33(
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
            /* @__PURE__ */ jsxs20("div", { className: "columnDiv", children: [
              /* @__PURE__ */ jsxs20("p", { className: "smallText", children: [
                "Step ",
                i + 1,
                " of ",
                data.length
              ] }),
              /* @__PURE__ */ jsx33(
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
import { jsx as jsx34 } from "react/jsx-runtime";
var FieldFlexRowWrap = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx34("div", { className: "fledFieldRowWrap", ...rest, children });
};
var FlexFieldRowWrap_default = FieldFlexRowWrap;

// src/components/common/ActionContainer/ActionArea.tsx
import React7 from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var ActionArea = React7.forwardRef(
  (props, ref) => {
    const { children, ...rest } = props;
    return /* @__PURE__ */ jsx35("div", { className: "actionContainer", ...rest, ref, children });
  }
);
var ActionArea_default = ActionArea;

// src/components/common/ActionContainer/index.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
var ActionContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx36("div", { className: "actionButtonContainer", ...rest, children });
};
var ActionContainer_default = ActionContainer;

// src/components/common/ModalWithOutline/index.tsx
import { Fragment as Fragment9, jsx as jsx37, jsxs as jsxs21 } from "react/jsx-runtime";
var ModalWithOutline = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ jsx37(Fragment9, { children: show ? /* @__PURE__ */ jsx37("div", { className: cn("modalBackground", "h-full"), role: "modal-bg", children: /* @__PURE__ */ jsxs21(
    "div",
    {
      className: cn("modalContainer", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ jsx37("div", { className: "modalHeaderContainer", children: /* @__PURE__ */ jsx37("span", { className: cn("modalHeader", "text-foreground"), children: header }) }),
        /* @__PURE__ */ jsx37("div", { className: "contentContainer", children })
      ]
    }
  ) }) : null });
};
var ModalWithOutline_default = ModalWithOutline;

// src/components/shad/FieldSetInput/index.module.scss
var index_module_default3 = {};

// src/components/ui/form.tsx
import * as React9 from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

// src/components/ui/label.tsx
import * as React8 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { jsx as jsx38 } from "react/jsx-runtime";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx38(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/form.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React9.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx39(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx39(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React9.useContext(FormFieldContext);
  const itemContext = React9.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
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
  return /* @__PURE__ */ jsx39(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx39("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React9.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx39(
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
  return /* @__PURE__ */ jsx39(
    Slot,
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
  return /* @__PURE__ */ jsx39(
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
  return /* @__PURE__ */ jsx39(
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
import { useCallback as useCallback4, useEffect as useEffect4, useRef as useRef4 } from "react";
import { jsx as jsx40, jsxs as jsxs22 } from "react/jsx-runtime";
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
  const toggleRef = useRef4(false);
  const markerRef = useRef4(null);
  useEffect4(() => {
    toggleRef.current = checked;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", checked.toString());
  }, [checked]);
  const toggleYes = useCallback4(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = useCallback4(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return /* @__PURE__ */ jsxs22("div", { className: index_module_default3.toggleContainer, "data-disabled": disabled, children: [
    /* @__PURE__ */ jsx40("span", { onClick: toggleYes, children: /* @__PURE__ */ jsx40("span", { children: checkedValue }) }),
    /* @__PURE__ */ jsx40("span", { onClick: toggleNo, children: /* @__PURE__ */ jsx40("span", { children: notCheckedValue }) }),
    /* @__PURE__ */ jsx40("div", { className: index_module_default3.marker, ref: markerRef, children: /* @__PURE__ */ jsx40("span", { children: checked ? checkedValue : notCheckedValue }) }),
    disabled ? /* @__PURE__ */ jsx40("div", { className: index_module_default3.disabledLabel, children: checked ? checkedValue : notCheckedValue }) : null
  ] });
};
var FieldSet_Toggle_default = Toggle;

// src/components/shad/FieldSetInput/FieldSet-Input.tsx
import { useFormContext as useFormContext2 } from "react-hook-form";
import moment from "moment";
import { Fragment as Fragment10, jsx as jsx41, jsxs as jsxs23 } from "react/jsx-runtime";
var toggleInputs2 = ["checkbox", "radio"];
var FieldSetInputCN = (props) => {
  const { control } = useFormContext2();
  if (toggleInputs2.includes(props.type || "text")) {
    return /* @__PURE__ */ jsx41(Fragment10, {});
  }
  const { name, formatNumber, containerstyle2, placeholder, ...rest } = props;
  return /* @__PURE__ */ jsx41(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs23(FormItem, { children: [
          /* @__PURE__ */ jsx41(FormControl, { children: /* @__PURE__ */ jsxs23(
            "fieldset",
            {
              className: cn(
                index_module_default3.fieldset,
                "rounded-sm border border-border dark:border-[#568293]  "
              ),
              "input-type": props.type || "text",
              children: [
                /* @__PURE__ */ jsx41(
                  "legend",
                  {
                    className: cn(
                      "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                    ),
                    children: props.placeholder
                  }
                ),
                /* @__PURE__ */ jsx41(
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
                    value: props.type?.toLowerCase() === "month" && field.value != void 0 ? `${field.value.toString().substring(0, 4)}-${field.value.toString().substring(4)}` : props.type?.toLowerCase() === "date" ? field.value === "" || field.value === null || field.value === void 0 ? "" : moment(
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
          /* @__PURE__ */ jsx41(FormMessage, {})
        ] });
      }
    }
  );
};
var FieldSet_Input_default = FieldSetInputCN;

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
import * as React16 from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

// src/components/ui/command.tsx
import * as React12 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

// src/components/ui/dialog.tsx
import * as React11 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { jsx as jsx42, jsxs as jsxs24 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx42(
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
var DialogContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs24(DialogPortal, { children: [
  /* @__PURE__ */ jsx42(DialogOverlay, {}),
  /* @__PURE__ */ jsxs24(
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
        /* @__PURE__ */ jsxs24(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx42(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx42("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx42(
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
}) => /* @__PURE__ */ jsx42(
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
var DialogTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx42(
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
var DialogDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx42(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/ui/command.tsx
import { jsx as jsx43, jsxs as jsxs25 } from "react/jsx-runtime";
var Command = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
  CommandPrimitive,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md  bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx43(Dialog, { ...props, children: /* @__PURE__ */ jsx43(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsx43(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs25(
  "div",
  {
    className: "flex items-center border-b px-3 dark:border-[#568293]",
    "cmdk-input-wrapper": "",
    children: [
      /* @__PURE__ */ jsx43(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      /* @__PURE__ */ jsx43(
        CommandPrimitive.Input,
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
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
  CommandPrimitive.List,
  {
    ref,
    className: cn(
      "max-h-[300px] overflow-y-auto overflow-x-hidden ",
      className
    ),
    ...props
  }
));
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React12.forwardRef((props, ref) => /* @__PURE__ */ jsx43(
  CommandPrimitive.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
  CommandPrimitive.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
  CommandPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
  CommandPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none  aria-selected:bg-accent aria-selected:text-primary-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx43(
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
import * as React13 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx44 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React13.forwardRef(({ className, align = "center", sideOffset = 0, ...props }, ref) => /* @__PURE__ */ jsx44(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx44(
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
import { useFormContext as useFormContext3 } from "react-hook-form";

// src/components/ui/drawer.tsx
import * as React14 from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx45, jsxs as jsxs26 } from "react/jsx-runtime";
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx45(
  DrawerPrimitive.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx45(
  DrawerPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs26(DrawerPortal, { children: [
  /* @__PURE__ */ jsx45(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs26(
    DrawerPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx45("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx45(
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
}) => /* @__PURE__ */ jsx45(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx45(
  DrawerPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx45(
  DrawerPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// src/hooks/use-media-query.ts
import * as React15 from "react";
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
import { jsx as jsx46, jsxs as jsxs27 } from "react/jsx-runtime";
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
  const { control } = useFormContext3();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return /* @__PURE__ */ jsx46(
    FormField,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsxs27(FormItem, { className: " flex flex-col", children: [
        isDesktop ? /* @__PURE__ */ jsxs27(Popover, { open, onOpenChange: setOpen, children: [
          !disabled ? /* @__PURE__ */ jsx46(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs27(
            "fieldset",
            {
              className: cn(
                index_module_default3.fieldset,
                "w-full rounded-sm border border-border dark:border-[#568293] "
              ),
              children: [
                /* @__PURE__ */ jsx46("legend", { className: "text-border dark:text-[#568293]", children: label }),
                /* @__PURE__ */ jsxs27("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: [
                  false ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ jsx46("span", { className: "text-border", children: placeholder }),
                  /* @__PURE__ */ jsx46(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
                ] })
              ]
            }
          ) }) : /* @__PURE__ */ jsxs27("fieldset", { className: cn(index_module_default3.fieldset, "w-full border-none"), children: [
            /* @__PURE__ */ jsx46("legend", { className: "text-border dark:text-[#568293]", children: label }),
            /* @__PURE__ */ jsx46("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: false ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ jsx46("span", { className: "text-foreground", children: placeholder }) })
          ] }),
          /* @__PURE__ */ jsx46(PopoverContent, { className: "z-[101]  m-0 w-[--radix-popover-trigger-width]  p-0", children: /* @__PURE__ */ jsx46(
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
        ] }) : /* @__PURE__ */ jsxs27(Drawer, { open, onOpenChange: setOpen, children: [
          !disabled ? /* @__PURE__ */ jsx46(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs27("fieldset", { className: cn(index_module_default3.fieldset, "w-full"), children: [
            /* @__PURE__ */ jsx46("legend", { className: "text-border dark:text-foreground", children: placeholder }),
            /* @__PURE__ */ jsxs27("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-0", children: [
              false ? /* @__PURE__ */ jsx46("span", { className: "text-[0.75rem]", children: data.find((d) => d.value == field.value)?.label }) : /* @__PURE__ */ jsx46("span", { className: "text-[1rem] text-border", children: placeholder }),
              /* @__PURE__ */ jsx46(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
            ] })
          ] }) }) : /* @__PURE__ */ jsxs27("fieldset", { className: cn(index_module_default3.fieldset, "w-full"), children: [
            /* @__PURE__ */ jsx46("legend", { className: "text-border dark:text-foreground", children: placeholder }),
            /* @__PURE__ */ jsx46("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-0", children: false ? /* @__PURE__ */ jsx46("span", { className: "text-[0.75rem] text-foreground", children: data.find((d) => d.value == field.value)?.label }) : /* @__PURE__ */ jsx46("span", { className: "text-[1rem] text-foreground", children: placeholder }) })
          ] }),
          /* @__PURE__ */ jsx46(DrawerContent, { className: "z-[101]", children: /* @__PURE__ */ jsx46("div", { className: "mt-4 border-t", children: /* @__PURE__ */ jsx46(
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
        /* @__PURE__ */ jsx46(FormMessage, {})
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
  const { setValue } = useFormContext3();
  return /* @__PURE__ */ jsxs27(Command, { className: "w-full ", children: [
    /* @__PURE__ */ jsx46(CommandInput, { placeholder: "Search" }),
    /* @__PURE__ */ jsxs27(CommandList, { children: [
      /* @__PURE__ */ jsx46(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ jsx46(CommandGroup, { children: data.map((content) => /* @__PURE__ */ jsxs27(
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
            /* @__PURE__ */ jsx46(
              CheckIcon,
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
import * as React17 from "react";
import { CheckIcon as CheckIcon2, ChevronsUpDown as ChevronsUpDown2 } from "lucide-react";
import { useFormContext as useFormContext4 } from "react-hook-form";
import { jsx as jsx47, jsxs as jsxs28 } from "react/jsx-runtime";
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
  const { control } = useFormContext4();
  const isDesktop = useMediaQuery("(min-width: 400px) and (min-height: 720px)");
  return /* @__PURE__ */ jsx47(
    FormField,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsxs28(FormItem, {
        className: "flex flex-col",
        // isDesktop ?
        children: [
          /* @__PURE__ */ jsxs28(Popover, { open, onOpenChange: setOpen, children: [
            !disabled ? /* @__PURE__ */ jsx47(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs28(
              "fieldset",
              {
                className: cn(
                  index_module_default3.fieldset,
                  "w-full rounded-sm border border-border dark:border-[#568293] "
                ),
                children: [
                  /* @__PURE__ */ jsx47("legend", { className: "text-border dark:text-[#568293]", children: label }),
                  /* @__PURE__ */ jsxs28("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: [
                    field.value && field.value != -1 ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ jsx47(
                      "span",
                      {
                        className: darkColoredPlaceholder ? "text-black" : "text-border",
                        children: placeholder
                      }
                    ),
                    /* @__PURE__ */ jsx47(ChevronsUpDown2, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
                  ] })
                ]
              }
            ) }) : /* @__PURE__ */ jsxs28("fieldset", { className: cn(index_module_default3.fieldset, "w-full border-none"), children: [
              /* @__PURE__ */ jsx47("legend", { className: "text-border dark:text-[#568293]", children: label }),
              /* @__PURE__ */ jsx47("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: field.value && field.value != -1 ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ jsx47("span", { className: "text-foreground", children: placeholder || "Select from List" }) })
            ] }),
            /* @__PURE__ */ jsx47(FormControl, { children: /* @__PURE__ */ jsx47(
              PopoverContent,
              {
                className: cn(
                  "  z-[101]  w-[--radix-popover-trigger-width] p-0"
                ),
                children: /* @__PURE__ */ jsx47(
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
          /* @__PURE__ */ jsx47(FormMessage, {})
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
  const { setValue } = useFormContext4();
  return /* @__PURE__ */ jsxs28(Command, { className: cn("w-full"), children: [
    /* @__PURE__ */ jsx47(CommandInput, { placeholder: "Search" }),
    /* @__PURE__ */ jsxs28(CommandList, { children: [
      /* @__PURE__ */ jsx47(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ jsx47(CommandGroup, { children: data.map((content) => /* @__PURE__ */ jsxs28(
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
            /* @__PURE__ */ jsx47(
              CheckIcon2,
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
import { useFormContext as useFormContext5 } from "react-hook-form";
import moment2 from "moment";
import { Fragment as Fragment11, jsx as jsx48, jsxs as jsxs29 } from "react/jsx-runtime";
var toggleInputs3 = ["checkbox", "radio"];
var FieldSetInputCN2 = (props) => {
  const { control } = useFormContext5();
  if (toggleInputs3.includes(props.type || "text")) {
    return /* @__PURE__ */ jsx48(Fragment11, {});
  }
  return /* @__PURE__ */ jsx48(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs29(FormItem, { children: [
          /* @__PURE__ */ jsx48(FormControl, { children: /* @__PURE__ */ jsxs29(
            "fieldset",
            {
              className: cn(
                index2_module_default.fieldset,
                "rounded-sm border border-border dark:border-[#568293]  "
              ),
              "input-type": props.type || "text",
              children: [
                /* @__PURE__ */ jsx48(
                  "legend",
                  {
                    className: cn(
                      "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                    ),
                    children: props.placeholder
                  }
                ),
                /* @__PURE__ */ jsx48(
                  "input",
                  {
                    className: cn(
                      "text-bas w-full border-none px-5 py-2 text-foreground placeholder-transparent outline-none disabled:bg-transparent",
                      props.customBG ? "bg-[#e9eff6]" : "bg-white"
                    ),
                    style: props.containerstyle2,
                    ...field,
                    ...props,
                    value: props.type?.toLowerCase() === "date" ? moment2(
                      field.value?.split("T").length > 1 ? field.value?.split("T")[0] : field.value
                    ).format("YYYY-MM-DD") : props.type?.toLowerCase() === "time" ? moment2(field.value).format("HH:mm") : field.value,
                    autoComplete: "off"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx48(FormMessage, {})
        ] });
      }
    }
  );
};
var FieldSet_Input_Gray_default = FieldSetInputCN2;

// src/components/shad/FieldSetInput/FieldSet-MatrixInput.tsx
import { useFormContext as useFormContext6 } from "react-hook-form";

// src/components/shad/FieldSetInput/matrix.module.scss
var matrix_module_default = {};

// src/components/shad/FieldSetInput/FieldSet-MatrixInput.tsx
import { jsx as jsx49, jsxs as jsxs30 } from "react/jsx-runtime";
var FieldSetMatrix = (props) => {
  const { control } = useFormContext6();
  return /* @__PURE__ */ jsx49(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => /* @__PURE__ */ jsx49(FormItem, { children: /* @__PURE__ */ jsx49(FormControl, { children: /* @__PURE__ */ jsxs30("div", { className: cn(matrix_module_default.formGroup, "w-full"), children: [
        /* @__PURE__ */ jsx49("span", { className: "border border-secondary bg-secondary text-background dark:text-foreground", children: props.title }),
        /* @__PURE__ */ jsx49(
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
import React18 from "react";
import { useFormContext as useFormContext7 } from "react-hook-form";
import { jsx as jsx50, jsxs as jsxs31 } from "react/jsx-runtime";
var FieldSetTextAreaCN = React18.forwardRef((props, ref) => {
  const { control } = useFormContext7();
  return /* @__PURE__ */ jsx50("div", { className: "flex-1", children: /* @__PURE__ */ jsx50(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => /* @__PURE__ */ jsxs31(FormItem, { children: [
        /* @__PURE__ */ jsx50(FormControl, { children: /* @__PURE__ */ jsxs31(
          "fieldset",
          {
            className: cn(
              index_module_default3.fieldset,
              "rounded-sm border border-border dark:border-[#568293] "
            ),
            children: [
              /* @__PURE__ */ jsx50("legend", { className: "text-border dark:text-[#568293]", children: props.placeholder }),
              /* @__PURE__ */ jsx50("textarea", { ...props, ...field, ref: field.ref })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx50(FormMessage, {})
      ] })
    }
  ) });
});
var FieldSet_TextArea_default = FieldSetTextAreaCN;

// src/components/shad/FlexField.tsx
import { jsx as jsx51 } from "react/jsx-runtime";
var FlexField = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx51("div", { className: "flex-1", ...rest, children });
};
var FlexField_default = FlexField;

// src/components/shad/FlexFieldRow2.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
var FieldFlexRow2 = (props) => {
  const { children, className, ...rest } = props;
  return /* @__PURE__ */ jsx52(
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
import { jsx as jsx53, jsxs as jsxs32 } from "react/jsx-runtime";
var MatrixFlexiRowLeftAlign = ({
  title,
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsxs32("div", { style: {}, children: [
    /* @__PURE__ */ jsx53("div", { className: "mb-[5px] flex text-[14px]", children: title }),
    /* @__PURE__ */ jsx53(
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
import * as React20 from "react";

// src/components/ui/button.tsx
import * as React19 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx54 } from "react/jsx-runtime";
var buttonVariants = cva2(
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
    const Comp = asChild ? Slot2 : "button";
    return /* @__PURE__ */ jsx54(
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
import { jsxs as jsxs33 } from "react/jsx-runtime";
var LucidButton = React20.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs33(
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
import * as React21 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx55, jsxs as jsxs34 } from "react/jsx-runtime";
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
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
var AlertDialogContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs34(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx55(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx55(
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
}) => /* @__PURE__ */ jsx55(
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
}) => /* @__PURE__ */ jsx55(
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
var AlertDialogTitle = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
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
import * as React22 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx56 } from "react/jsx-runtime";
var Avatar = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx56(
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
var AvatarImage = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx56(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx56(
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsx as jsx57 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ jsx57(
    DayPicker,
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
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx57(ChevronLeft, { className: cn("h-4 w-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx57(ChevronRight, { className: cn("h-4 w-4", className2), ...props2 })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";

// src/components/ui/card.tsx
import * as React23 from "react";
import { jsx as jsx58 } from "react/jsx-runtime";
var Card = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx58(
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
var CardHeader = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx58(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx58(
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
var CardDescription = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx58(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx58("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx58(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/checkbox.tsx
import * as React24 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { jsx as jsx59 } from "react/jsx-runtime";
var Checkbox = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx59(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx59(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-background"),
        children: /* @__PURE__ */ jsx59(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/input.tsx
import * as React25 from "react";
import { jsx as jsx60 } from "react/jsx-runtime";
var Input = React25.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx60(
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
import * as React26 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check as Check2, ChevronRight as ChevronRight2, Circle } from "lucide-react";
import { jsx as jsx61, jsxs as jsxs35 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React26.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs35(
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
      /* @__PURE__ */ jsx61(ChevronRight2, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx61(
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
var DropdownMenuContent = React26.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx61(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx61(
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
var DropdownMenuItem = React26.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx61(
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
var DropdownMenuCheckboxItem = React26.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs35(
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
      /* @__PURE__ */ jsx61("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx61(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx61(Check2, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React26.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs35(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx61("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx61(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx61(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React26.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx61(
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
var DropdownMenuSeparator = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx61(
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
  return /* @__PURE__ */ jsx61(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/ui/light-dark-toggle.tsx
import { useState as useState5, useEffect as useEffect6 } from "react";

// src/components/ui/tooltip.tsx
import * as React27 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx62 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React27.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx62(
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
import { MoonIcon, SunIcon } from "lucide-react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { jsx as jsx63, jsxs as jsxs36 } from "react/jsx-runtime";

// src/components/ui/radio-group.tsx
import * as React28 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle as Circle2 } from "lucide-react";
import { jsx as jsx64 } from "react/jsx-runtime";
var RadioGroup2 = React28.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx64(
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
  return /* @__PURE__ */ jsx64(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx64(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx64(Circle2, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ui/scroll-area.tsx
import * as React29 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsx as jsx65, jsxs as jsxs37 } from "react/jsx-runtime";
var ScrollArea = React29.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs37(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx65(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx65(ScrollBar, {}),
      /* @__PURE__ */ jsx65(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React29.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx65(
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
    children: /* @__PURE__ */ jsx65(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/ui/select.tsx
import * as React30 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check3, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx66, jsxs as jsxs38 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React30.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs38(
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
      /* @__PURE__ */ jsx66(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx66(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx66(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx66(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx66(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx66(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React30.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx66(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs38(
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
      /* @__PURE__ */ jsx66(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx66(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx66(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx66(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React30.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs38(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx66("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx66(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx66(Check3, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx66(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx66(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ui/toggle-group.tsx
import * as React36 from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

// src/components/ui/toggle.tsx
import * as React35 from "react";

// node_modules/@radix-ui/react-toggle/dist/index.mjs
import * as React34 from "react";

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
import * as React32 from "react";

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React31 from "react";
var useLayoutEffect2 = globalThis?.document ? React31.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React210 from "react";
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
import * as React33 from "react";
import * as ReactDOM from "react-dom";
import { createSlot } from "@radix-ui/react-slot";
import { jsx as jsx67 } from "react/jsx-runtime";
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
  const Slot3 = createSlot(`Primitive.${node}`);
  const Node = React33.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx67(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-toggle/dist/index.mjs
import { jsx as jsx68 } from "react/jsx-runtime";
var NAME = "Toggle";
var Toggle2 = React34.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
  const [pressed, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed ?? false,
    caller: NAME
  });
  return /* @__PURE__ */ jsx68(
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
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx69 } from "react/jsx-runtime";
var toggleVariants = cva3(
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
var Toggle3 = React35.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx69(
  Root12,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle3.displayName = Root12.displayName;

// src/components/ui/toggle-group.tsx
import { jsx as jsx70 } from "react/jsx-runtime";
var ToggleGroupContext = React36.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React36.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsx70(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ jsx70(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React36.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React36.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx70(
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
export {
  ActionArea_default as ActionArea,
  ActionContainer_default as ActionContainer,
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
  ButtonContainer_default as ButtonContainer,
  ButtonContainerNoWrap_default as ButtonContainerNoWrap,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ColumnContainer_default as ColumnContainer,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContainerLabel_default as ContainerLabel,
  ContentGrid_default as ContentGrid,
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
  FieldSetInput_default2 as FieldSetInput,
  FieldSetTextArea_default as FieldSetTextArea,
  FieldSet_TextArea_default as FieldSetTextAreaCN,
  FilterToggle_default2 as FilterToggle,
  FlexFieldRow_default as FlexFieldRow,
  FlexFieldRowWrap_default as FlexFieldRowWrap,
  FlexRow_default as FlexRow,
  FlexiRowMatrix_default as FlexiRowMatrix,
  FlexiRowMatrixLeftAlign_default as FlexiRowMatrixLeftAlign,
  Footer_default2 as Footer,
  Form,
  FormContentGrid_default as FormContentGrid,
  FormContentNav_default as FormContentNav,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection_default as FormSection,
  HollowButton_default as HollowButton,
  ImageContainer_default as ImageContainer,
  InfoContainer_default as InfoContainer,
  Input,
  Label,
  LabelContentComponent_default as LabelContentComponent,
  LabelContentContainer_default as LabelContentContainer,
  LabelContentContainerNoPadding_default as LabelContentContainerNoPadding,
  LeftSideUpPart,
  ListMakerComponent_default2 as ListMakerComponent,
  LoadingOverlay_default2 as LoadingOverlay,
  lucid_button_default as LucidButton,
  MatrixInput_default as MatrixInput,
  Modal_default2 as Modal,
  ModalDivider_default2 as ModalDivider,
  ModalWithOutline_default as ModelWithOutline,
  Button_default as NormalButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup2 as RadioGroup,
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
  FieldSet_Dropdown_default as ShadFieldSetDropdown,
  FieldSet_Dropdown_ListMaker_default as ShadFieldSetDropdownListMaker,
  FieldSet_Input_default as ShadFieldSetInput,
  FieldSet_Input_Gray_default as ShadFieldSetInputGray,
  FieldSet_MatrixInput_default as ShadFieldSetMatrixInput,
  FieldSet_Toggle_default as ShadFieldSetToggle,
  FlexField_default as ShadFlexField,
  FlexFieldRow2_default as ShadFlexFieldRow2,
  MatrixFlexiRowLeftAlign_default as ShadMatrixFlexiRowLeftAlign,
  SideFilterStationary,
  SkeletonSpan_default2 as SkeletonSpan,
  StepsMaker_default2 as StepsMaker,
  Toggle3 as Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  YellowButton_default as YellowButton,
  buttonVariants,
  colors_default as colors,
  skeleton_default as skeletonSizes,
  toggleVariants,
  useFormField
};
//# sourceMappingURL=index.mjs.map