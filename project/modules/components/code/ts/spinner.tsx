import React, {
  ForwardRefExoticComponent,
  forwardRef,
  LegacyRef,
  RefAttributes,
} from "react";
type properties = {
  color?: string;
  className?: string;
  type: string;
  size?: "xs" | "md" | "lg" | "xl";
  active: boolean;
};
export /*bundle*/
const Spinner: ForwardRefExoticComponent<properties & RefAttributes<unknown>> =
  forwardRef(
    (props: properties, ref: LegacyRef<HTMLDivElement>): JSX.Element => {
      let { color, className, size, type, active } = props;

      const types = [
        "on-primary",
        "on-secondary",
        "on-surface",
        "on-error",
        "primary",
        "secondary",
        "tertiary",
      ];
      const clsType = types.includes(type) ? type : "primary";

      const style: { stroke?: string } = {};
      if (color) style.stroke = color;
      className = `${clsType}${className ? ` ${className}` : ""}`;
      let cls: string = className
        ? `${className} pragmate-element-spinner`
        : "pragmate-element-spinner";
      if (active) cls += " is-active";

      const circleSize =
        size === "xs"
          ? 30
          : size === "md"
          ? 40
          : size === "lg"
          ? 50
          : size === "xl"
          ? 60
          : 30;

      return (
        <div className={cls} ref={ref}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={circleSize} style={style} />
          </svg>
        </div>
      );
    }
  );