'use client';

import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#2563EB',
  //     light: '#2aa9ff08',
  //   },
  //   secondary: {
  //     main: '#1E40AF',
  //   },
  // },
  palette: {
    primary: {
      main: '#2aa9ff',
      light: '#2aa9ff08',
    },
    secondary: {
      main: '#12304b',
      // main: '#00ff99',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        style: {padding: '8px 24px', color: '#fafafa'},
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },

    MuiStack: {
      defaultProps: {
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    MuiTypography: {
      defaultProps: {
        color: '#424242',
      },
    },
  },
});

// 1. প্রাইমারি কালার সিলেকশন
// বর্তমান কালার (#2AA9FF): এটি একটি ভাল ব্লু শেড, কিন্তু একটু বেশি কমন/জেনেরিক লাগতে পারে।

// সাজেশন:

// ডিপার/এক্সটেন্ডেড কালার প্যালেট:

// প্রাইমারি: #2563EB (বেশি রিচ ব্লু)

// সেকেন্ডারি: #1E40AF (ডার্ক ব্লু)

// অ্যাকসেন্ট: #3B82F6 (ব্রাইটার ব্লু)

// গ্রেডিয়েন্ট ইউজ করুন:

// css
// background: linear-gradient(135deg, #2563EB, #3B82F6);
// 2. কন্ট্রাস্ট ও রিডেবিলিটি
// টেক্সট কালার:

// ডার্ক ব্যাকগ্রাউন্ডে #FFFFFF (সাদা)

// লাইট ব্যাকগ্রাউন্ডে #1E293B (ডার্ক গ্রে-ব্লু)

// বাটন/CTA:

// #2563EB (প্রাইমারি) + হোভারে #1E40AF

// 3. মডার্ন টাচেস
// নিওমরফিজম/গ্লাস ইফেক্ট:

// css
// background: rgba(255, 255, 255, 0.1);
// backdrop-filter: blur(10px);
// border: 1px solid rgba(255, 255, 255, 0.2);
// ডার্ক মোড:

// css
// :root {
//   --primary: #2563EB;
//   --bg-dark: #0F172A;
// }
