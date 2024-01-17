export default function HeaderTitle({
  title,
  description,
  shadow = false,
  theme = "primary",
}: {
  title: string;
  description?: string;
  shadow?: boolean;
  theme?: string;
}) {
  return (
    <div className="headerTitle  ">
      <div className={`relative ${shadow && "pt-5"}`}>
        {shadow && (
          <span className="title text-6xl  font-bold uppercase  headerOutline text-transparent absolute">
            {title}
          </span>
        )}
        <h1 className="title text-5xl  text-center font-bold uppercase text-red ">
          {title}
        </h1>
      </div>
      {description && (
        <>
          <div className="divider w-10 after:bg-red before:bg-red mx-auto"></div>
          <h2
            className="description font-bold text-center  uppercase text-2xl pb-5"
            dangerouslySetInnerHTML={{ __html: description }}
          ></h2>
        </>
      )}
    </div>
  );
}
