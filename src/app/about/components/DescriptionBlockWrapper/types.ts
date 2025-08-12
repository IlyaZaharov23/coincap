import { StaticImport } from "next/dist/shared/lib/get-img-props";

type DescriptionListItem = {
    title: string;
    description: string;
};

export interface DescriptionBlockWrapperProps {
    mainTitle: string;
    mainDescription: string;
    descriptionList: DescriptionListItem[];
    listTitle: string;
    icon: string | StaticImport;
}
