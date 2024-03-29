import Image from "next/image";

interface MetricProps {
  imgUrl: string;
  title: string;
  alt: string;
  upvotes?: number;
  value: number | string;
  textStyles: string;
  isAuthor?: boolean;
  href?: string;
}

function Metric({
  imgUrl,
  alt,
  title,
  upvotes,
  value,
  textStyles,
  isAuthor,
  href,
}: MetricProps) {
  const metricContent = (
    <div>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}>
          {title}
        </span>
      </p>
    </div>
  );
  if (href) {
    return (
      <div>{metricContent}</div>
      // <Link href={href} className="flex-center gap-1">
      //   {metricContent}
      // </Link>
    );
  }
  return <div className="flex-center flex-wrap  gap-1">{metricContent}</div>;
}

export default Metric;
