import Image, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function prefixSrc(src: string) {
  if (src.startsWith('/') && !src.startsWith('//')) {
    return `${basePath}${src}`;
  }
  return src; // absolute URLs like https:// are left alone
}

export default function AppImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? prefixSrc(src) : src;
  return <Image src={resolvedSrc} {...props} />;
}