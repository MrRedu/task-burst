import Link from "next/link";

export const HelpModal = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{`About`}</h2>
      <p className="text-c-silver text-semibold">
        {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, alias exercitationem repellat necessitatibus sapiente placeat corporis ut laborum reiciendis magnam sit consequuntur, inventore vero fugit voluptates labore, cum doloremque dicta?`}
      </p>
      <h3 className="text-md font-bold">{`Feature Overview`}</h3>
      <p className="text-c-silver text-semibold">
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        deserunt, voluptates dolores eum odio explicabo delectus ipsam suscipit
        cum consequatur.`}
      </p>
      <p className="text-c-silver text-semibold">
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        deserunt, voluptates dolores eum odio explicabo delectus ipsam suscipit
        cum consequatur.`}
      </p>
      <h3 className="text-md font-bold">{`Contribution`}</h3>
      <p className="text-c-silver text-semibold">
        The project is Open Source and available on{" "}
        <Link
          href="https://github.com/MrRedu/task-burst/"
          className="underline font-bold"
        >
          GitHub
        </Link>
        .
      </p>
      <p className="text-c-silver text-semibold">
        If you have any feedback, suggestions, or issues, please{" "}
        <Link
          href="https://github.com/MrRedu/task-burst/issues"
          className="underline font-bold"
        >
          open an issue
        </Link>{" "}
        on Github.
      </p>
    </div>
  );
};