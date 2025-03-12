import icons from '@/constants/icons';
import colors from '@/constants/Colors';

// serviceTypes.ts
export const serviceType = {
    cidadania: {
      color: colors.textOrange,
      icon: icons.solPessoa,
      arrow: icons.arrowOrange,
    },
    saude: {
      color: colors.textRed,
      icon: icons.saude,
      arrow: icons.arrowRed,
    },
    ambiente: {
      color: colors.textGreen,
      icon: icons.ambiente,
      arrow: icons.arrowGreen,
    },
  } as const;
  
  // Definindo o tipo baseado nas chaves do objeto
  export type ServiceType = keyof typeof serviceType;
  