const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function prefixSrc(src: string) {
  if (src.startsWith('/') && !src.startsWith('//')) {
    return `${basePath}${src}`;
  }
  return src;
}

interface AppVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export default function AppVideo({ src, ...props }: AppVideoProps) {
  return <video src={prefixSrc(src)} {...props} />;
}