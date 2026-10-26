"use client";

import Image from "next/image";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/app/store";

const formatPrice = (price: number) =>
  `$ ${price.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;

export function CartDrawer() {
  const items = useCart((state) => state.items);
  const isOpen = useCart((state) => state.isOpen);
  const openCart = useCart((state) => state.openCart);
  const closeCart = useCart((state) => state.closeCart);
  const removeItem = useCart((state) => state.removeItem);
  const setQuantity = useCart((state) => state.setQuantity);
  const clearCart = useCart((state) => state.clearCart);

  const state = useOverlayState({
    isOpen,
    onOpenChange: (open) => (open ? openCart() : closeCart()),
  });

  const count = items.reduce((n, item) => n + item.quantity, 0);
  const subtotal = items.reduce((n, item) => n + item.price * item.quantity, 0);

  return (
    <Drawer state={state}>
      <Button
        className="text-white bg-transparent p-0 flex items-center gap-1.5"
        aria-label={`Cart with ${count} items`}
      >
        Cart
        {count > 0 && (
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-semibold text-[#2c2420]">
            {count}
          </span>
        )}
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog className="bg-[#faf8f2] text-[#2c2420]">
            <Drawer.Header className="border-b border-[#e8e0d6]">
              <Drawer.Heading className="text-[#2c2420]">
                Your Cart{" "}
                {count > 0 && (
                  <span className="text-sm font-normal text-[#8a7560]">
                    ({count} {count === 1 ? "item" : "items"})
                  </span>
                )}
              </Drawer.Heading>
              <Drawer.CloseTrigger
                className="p-2 rounded-full text-[#a89880] hover:text-[#2c2420] hover:bg-[#f0ebe3] transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={16} />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <ShoppingBag size={32} className="text-[#c4b8a8]" strokeWidth={1.4} />
                  <p className="text-sm text-[#8a7560]">Your cart is empty.</p>
                </div>
              ) : (
                <ul className="grid gap-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 rounded-xl border border-[#e8e0d6] bg-white p-3"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#f5f3f0]">
                        {item.imageSrc ? (
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[#c4b8a8]">
                            <ShoppingBag size={20} strokeWidth={1.4} />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm leading-snug text-[#2c2420]">
                            {item.title}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-[#c4b8a8] transition hover:text-[#b4534a]"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-[#d8cfc5] bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity(item.id, item.quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full text-[#8a7560] transition hover:bg-[#f0ebe3]"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="min-w-5 text-center text-sm text-[#2c2420]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity(item.id, item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full text-[#8a7560] transition hover:bg-[#f0ebe3]"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-[#2c2420]">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Drawer.Body>

            <Drawer.Footer className="border-t border-[#e8e0d6]">
              {items.length > 0 && (
                <div className="grid w-full gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#8a7560]">
                      Subtotal
                    </span>
                    <span className="text-lg font-light text-[#2c2420]">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a89880]">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="rounded-full border border-[#d8cfc5] px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-[#8a7560] transition hover:bg-[#f0ebe3] cursor-pointer"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-[#2c2420] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#8a7560] cursor-pointer"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
