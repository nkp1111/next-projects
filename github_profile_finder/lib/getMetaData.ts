import { MetaDataType } from '@/type';
import React, { Dispatch } from 'react'

export default function getMetaData(
  metaType: string,
  metaUrl: string,
  setMetaData: Dispatch<any>,
) {
  fetch(metaUrl)
    .then(res => res.json())
    .then(data => {
      if (metaType === "repos") setMetaData((pre: MetaDataType) => ({ ...pre, repoData: data.reverse() }))
      if (metaType === "gists") setMetaData((pre: MetaDataType) => ({ ...pre, gistData: data.reverse() }))
      if (metaType === "starred") setMetaData((pre: MetaDataType) => ({ ...pre, starredData: data.reverse() }))
    })
    .catch(err => console.log(err))
  return;
}
