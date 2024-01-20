

import { Button } from '@/components/ui/button';

interface ButtonProps {
  /**
   * Variantes por defecto de shadcn. Las variantes por defecto definen background color, text color, hover color y bordes.
   */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  /**
   * Qué background color usar
   */
  backgroundColor?: string;
  /**
   * Tamaño del borde
   */
  borderWidth?: string;
  /**
   * Color del borde
   */
  borderColor?: string;

  /**
   * Qué color de texto utilizar
   */
  textColor?: string;
  /**
   * Tamaño del botón
   */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /**
   * Contenido del botón
   */
  label: string;
  /**
   * Border radius size
   */
  borderRadius?: string;
   /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const ShadcnButton = ({
  variant = 'default',
  size = 'default',
  backgroundColor,
  borderWidth,
  borderColor,
  textColor,
  label,
  borderRadius,
  ...props
}: ButtonProps) => {
  const parsedBorderRadius = borderRadius ? borderRadius.split(' ')[0] : '';
  const parsedBorderWidth = borderWidth ? borderWidth.split(' ')[0] : '';
  return (
    <Button
      variant={variant}
      size={size}
      className={`${parsedBorderRadius} ${parsedBorderWidth}`}
      style={{ backgroundColor, color: textColor}}
      {...props}
    >
      {label}
    </Button>
  );
}