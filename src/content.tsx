import cssText from "data-text:~tailwind.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import { useState } from "react"
import { FaMagic } from "react-icons/fa"

import Popup from "./Modal"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(".msg-form__contenteditable")

export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const PlasmoOverlay = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const textarea = document.querySelector(
    ".msg-form__contenteditable"
  ) as HTMLTextAreaElement

  textarea.addEventListener("focus", () => {
    setIsFocused(true)
  })
  textarea.style.position = "static"

  return isFocused ? (
    <div className="absolute top-[6rem] left-[37rem] bg-white shadow-md rounded-full p-2 cursor-pointer hover:bg-blue-100 hover:shadow-md transition duration-200 ease-in-out">
      <FaMagic
        onClick={() => setIsOpen(true)}
        className="text-xl text-blue-600 rounded-full w-[24px] h-[24px] p-2"
      />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  ) : null
}

export default PlasmoOverlay
