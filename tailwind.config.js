import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: defaultTheme.spacing["6"],
        sm: defaultTheme.spacing["8"],
        lg: defaultTheme.spacing["16"],
        xl: defaultTheme.spacing["20"],
        '2xl': defaultTheme.spacing["24"],
      },
    },
    extend: {
      boxShadow: {
        'header': '0px 2px 8px rgba(200, 200, 200, 0.3)',
        'menu': '0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
        'card': '0px 2px 16px rgba(0, 0, 0, 0.1)',
        'feature': '0px 2px 6px -4px rgba(0, 255, 200, 0.75), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      transitionTimingFunction: {
        'primary': "cubic-bezier(0.94, 0.07, 0.25, 0.95)",
        'secondary': 'cubic-bezier(0.04, 0.94, 0.90, 1.00)',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translatex(0);',
            animationTimingFunction : 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translatex(-15%)',
            animationTimingFunction : 'cubic-bezier(0, 0, 0.2, 1)'
          },

        }
      },
    }
  }
}
