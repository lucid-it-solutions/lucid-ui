import React from "react"

const MatrixFlexiRowLeftAlign = ({
  title,
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div style={{}}>
      <div className="mb-[5px] flex text-[14px]">{title}</div>
      <div
        className="relative ml-[10px] flex w-[50%] min-w-[150px] flex-col items-baseline justify-start gap-[10px] sm:w-auto sm:min-w-min sm:flex-row sm:gap-[30px]"
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}

export default MatrixFlexiRowLeftAlign
