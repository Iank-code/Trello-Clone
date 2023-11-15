import React from "react";

export default function IdPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <div>{params.id}</div>;
}
 