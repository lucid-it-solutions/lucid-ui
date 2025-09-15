/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.scss";
import Button from "../Button";

export interface ListMakerComponentProps<T>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string;
  data: T[];
  onRemove?: (r: T) => void;
  onOpen?: (s: string, t: string) => void;
  hasAttachments?: boolean;
  binding: keyof T | ((props: T) => React.ReactNode);
  disabled?: boolean;
  loading?: boolean;
}

export function createListMaker<T>() {
  return ListMaker<T>;
}

export function ListMaker<T>(props: ListMakerComponentProps<T>) {
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

  useEffect(() => {
    setInnerData(data);
  }, [data]);

  const onItemRemove = (item: T) => {
    if (!onRemove) {
      return;
    }
    onRemove(item);
  };

  // const onItemOpen = (item: string) => {
  //   if (!onOpen) {
  //     return
  //   }
  //   // onOpen(item);
  // }

  return (
    <div className="listMakerContainer" {...rest}>
      <div className="listMakerHeader">
        <span className="listMakerLabel">{label}</span>
        {disabled ? null : <div>{children}</div>}
      </div>
      <div className={loading ? styles.listContentLoading : styles.listContent}>
        {innerData.length > 0 ? (
          innerData.map((d, i) => {
            let val = "";
            let id = "";
            if (typeof binding !== "function") {
              val = d[binding] + "";
              if (binding === "id") id = d[binding as keyof T] as string;
            }

            return (
              <div key={i} className={styles.removableRow}>
                {hasAttachments && onOpen !== null ? (
                  <a
                    key={i}
                    onClick={() =>
                      onOpen((d as any).data, (d as any).fileExtension)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {typeof binding === "function"
                      ? limitCharacters(binding(d))
                      : val}
                  </a>
                ) : (
                  <a key={i}>
                    {typeof binding === "function" ? binding(d) : val}
                  </a>
                )}
                {disabled ? null : (
                  <Button
                    className={styles.removeButton}
                    onClick={() => onItemRemove(d)}
                  >
                    &#10005;
                  </Button>
                )}
              </div>
            );
          })
        ) : (
          <div className={styles.noItems}>{`No ${label} selected`}</div>
        )}
      </div>
    </div>
  );
}

const limitCharacters = (val: React.ReactNode) => {
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

export default ListMaker;
