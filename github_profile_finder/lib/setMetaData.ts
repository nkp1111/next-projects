import React, { Dispatch } from 'react'

export default function setMetaData(
  metaUrl: string,
  setMetaData: Dispatch<any>,
) {
  fetch(metaUrl)
    .then(res => res.json())
    .then(data => setMetaData(data.reverse()))
    .catch(err => console.log(err))
  return;
}
