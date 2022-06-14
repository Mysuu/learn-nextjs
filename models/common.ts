import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode//ReactNode là số, sting, null, undefined,...
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement//ReactElement là các element
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
