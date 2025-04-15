"use client"

import { useEffect, useRef } from "react"
export function SalesOverviewChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    const width = canvasRef.current?.width || 800
    const height = canvasRef.current?.height || 400
    const padding = 40

    ctx.clearRect(0, 0, width, height)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const sales = [4500, 5200, 4800, 5800, 6000, 5500, 7000, 6800, 8200, 7800, 8500, 9200]
    const maxSale = Math.max(...sales) * 1.1

    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#ddd"
    ctx.stroke()

    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#888"
    ctx.font = "12px sans-serif"
    
    for (let i = 0; i <= 5; i++) {
      const y = height - padding - ((height - 2 * padding) * i) / 5
      const value = Math.round((maxSale * i) / 5)
      ctx.fillText(`$${value}`, padding - 10, y)
      
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.strokeStyle = "#eee"
      ctx.stroke()
    }

    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    const barWidth = (width - 2 * padding) / months.length
    
    months.forEach((month, i) => {
      const x = padding + i * barWidth + barWidth / 2
      ctx.fillText(month, x, height - padding + 10)
    })

    sales.forEach((sale, i) => {
      const x = padding + i * barWidth + barWidth * 0.1
      const barHeight = ((height - 2 * padding) * sale) / maxSale
      const y = height - padding - barHeight
      
      const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.8)")
      gradient.addColorStop(1, "rgba(16, 185, 129, 0.4)")
      
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, barWidth * 0.8, barHeight)
      
      ctx.fillStyle = "#888"
      ctx.textAlign = "center"
      ctx.textBaseline = "bottom"
      ctx.fillText(`$${sale}`, x + barWidth * 0.4, y - 5)
    })

    ctx.beginPath()
    sales.forEach((sale, i) => {
      const x = padding + i * barWidth + barWidth / 2
      const y = height - padding - ((height - 2 * padding) * sale) / maxSale
      
      if (i === 0)
        ctx.moveTo(x, y)
      else
        ctx.lineTo(x, y)
    })
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 3
    ctx.stroke()

    sales.forEach((sale, i) => {
      const x = padding + i * barWidth + barWidth / 2
      const y = height - padding - ((height - 2 * padding) * sale) / maxSale
      
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "#10b981"
      ctx.fill()
      ctx.strokeStyle = "#fff"
      ctx.lineWidth = 2
      ctx.stroke()
    })
  }, [])

  return <canvas ref={canvasRef} width={800} height={400} className="w-full h-[300px]" />
}