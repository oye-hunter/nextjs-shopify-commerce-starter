export default function LogoIcon(props: React.ComponentProps<'img'>) {
  return (
    <img
      src="/favicon/favicon.ico"
      alt={`${process.env.SITE_NAME} logo`}
      {...props}
      style={{ width: '40px', height: '40px', ...props.style }}
    />
  );
}
