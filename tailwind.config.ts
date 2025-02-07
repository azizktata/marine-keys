import {heroui} from '@heroui/theme';
import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|button|card|dropdown|image|navbar|toggle|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
  	extend: {
		screens: {
			'xs': '375px', 
			'tablette': '500px',
			'sm-v2': '685px',
			'laptop': '1060px',
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [nextui(),require("tailwindcss-animate"),heroui()],
} satisfies Config;
