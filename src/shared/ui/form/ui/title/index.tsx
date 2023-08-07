import {FC} from "react";
import "./index.scss";
import {createClassName} from "shared/utils/helpers";

interface IProps {
    children: string;
    theme?: "dark" | 'light';
    center?: true;
}

export const FormTitle: FC<IProps> = (props) => {

    const className = createClassName([
        'form__title',
        `form__title_theme_${props.theme}`,
        props.center && 'form__title_text-align_center'
    ])
    return <h2 className={className}>{props.children}</h2>;
};
