

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
   * Border radius size
   */
  borderRadius?: string;
  /**
   * Botón desactivado
   */
  disabled?: boolean;
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
   * Optional click handler
   */
  onClick?: () => void;
}

export const ShadcnButton = ({
  variant = 'default',
  size = 'default',
  backgroundColor,
  borderRadius,
  disabled,
  borderWidth,
  textColor,
  label,
  
  ...props
}: ButtonProps) => {
  const parsedBorderRadius = borderRadius ? borderRadius.split(' ')[0] : '';
  const parsedBorderWidth = borderWidth ? borderWidth.split(' ')[0] : '';
  const parsedBackgroundColor = backgroundColor ?  backgroundColor.toLowerCase() : ''
  const bgColor = backgroundColor ? `bg-${parsedBackgroundColor}9` : '';
  const bgHoverColor = backgroundColor ? `hover:bg-${parsedBackgroundColor}10` : '';
  const focusVisibleRingColor = backgroundColor ? `focus-visible:ring-${parsedBackgroundColor}8` : '';
  return (
    <Button
      variant={variant}
      size={size}
      className={`${bgColor} ${bgHoverColor} ${focusVisibleRingColor} ${parsedBorderRadius} ${parsedBorderWidth}`}
      style={{ color: textColor}}
      disabled={disabled}
      {...props}
    >
      {label}
    </Button>
  );
}