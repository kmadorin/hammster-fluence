; ModuleID = 'probe1.523e539a549530b7-cgu.0'
source_filename = "probe1.523e539a549530b7-cgu.0"
target datalayout = "e-m:e-p:32:32-p10:8:8-p20:8:8-i64:64-n32:64-S128-ni:1:10:20"
target triple = "wasm32-unknown-wasi"

; core::f64::<impl f64>::to_int_unchecked
; Function Attrs: inlinehint nounwind
define hidden i32 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$16to_int_unchecked17h85e21b3fa97a999cE"(double %self) unnamed_addr #0 {
start:
; call <f64 as core::convert::num::FloatToInt<i32>>::to_int_unchecked
  %_0 = call i32 @"_ZN65_$LT$f64$u20$as$u20$core..convert..num..FloatToInt$LT$i32$GT$$GT$16to_int_unchecked17hd33947fe8a675b9fE"(double %self) #3
  ret i32 %_0
}

; <f64 as core::convert::num::FloatToInt<i32>>::to_int_unchecked
; Function Attrs: inlinehint nounwind
define internal i32 @"_ZN65_$LT$f64$u20$as$u20$core..convert..num..FloatToInt$LT$i32$GT$$GT$16to_int_unchecked17hd33947fe8a675b9fE"(double %self) unnamed_addr #0 {
start:
  %0 = alloca i32, align 4
  %1 = call i32 @llvm.wasm.trunc.signed.i32.f64(double %self)
  store i32 %1, ptr %0, align 4
  %_0 = load i32, ptr %0, align 4, !noundef !1
  ret i32 %_0
}

; probe1::probe
; Function Attrs: nounwind
define hidden void @_ZN6probe15probe17ha9474260f084d821E() unnamed_addr #1 {
start:
; call core::f64::<impl f64>::to_int_unchecked
  %_1 = call i32 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$16to_int_unchecked17h85e21b3fa97a999cE"(double 1.000000e+00) #3
  ret void
}

; Function Attrs: nounwind memory(none)
declare hidden i32 @llvm.wasm.trunc.signed.i32.f64(double) #2

attributes #0 = { inlinehint nounwind "target-cpu"="generic" }
attributes #1 = { nounwind "target-cpu"="generic" }
attributes #2 = { nounwind memory(none) }
attributes #3 = { nounwind }

!llvm.ident = !{!0}

!0 = !{!"rustc version 1.77.1 (7cf61ebde 2024-03-27)"}
!1 = !{}
