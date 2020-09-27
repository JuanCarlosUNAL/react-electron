export interface Props {
  /**
   * Class from styled components
   */
  className?: string;
  /**
   * Button label
   */
  children: string | Array<string>;
  /**
   * style modifier
   */
  disabled?: boolean;
}
