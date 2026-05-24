

function Anouncement() {
  return (
    <div className="w-full">
      {/* Top beige bar */}
      <div className="bg-[#e4deda] text-[#a3907a] text-[13px] uppercase tracking-wide py-2 text-center">
      Free IDR 10,000 DELIVERY FEE ON YOUR FIRST ORDER
      </div>
      <div className="bg-[#a3907a] text-white text-[13px] uppercase tracking-wide py-2 text-center">
        ORDER BEFORE 14.00 WIB (MON–SAT) FOR SAME-DAY SHIPPING. T&amp;Cs
        APPLY |{" "}
        <a
          href="#"
          className="underline hover:opacity-80 transition"
        >
          BUILD A BOX
        </a>
      </div>

      {/* Bottom dark bar */}
      <div className="bg-[#262626] text-white text-[13px] uppercase tracking-wide py-2 text-center">
        SHIPPING TO ALL CITIES IN INDONESIA (EXCEPT SUNDAYS &amp; NATIONAL
        HOLIDAYS)
      </div>
    </div>
  )
}

export default Anouncement