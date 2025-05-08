'use client'

import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">Modal Title</h2>
          <button onClick={onClose} className="modal-close">&times;</button>
        </div>

        {/* Content (Scroll ได้) */}
        <div className="modal-body">
          {children}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="modal-button">
            ปิด
          </button>
        </div>
      </div>
    </div>
  )
}
