'use client';

export default function CopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  return <>{copyrightDate}</>;
}

