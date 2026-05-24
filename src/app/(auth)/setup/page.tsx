"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import InputField from "@/components/shared/InputField";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setName,
  setPhone,
  setGrade,
  setLoading,
  setNameError,
  setPhoneError,
  resetSetup,
} from "@/store/auth/setupAuth";

export default function SetupPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { name, phone, grade, loading, nameError, phoneError } = useAppSelector(
    (state) => state.setupAuth,
  );

  const validate = () => {
    let isValid = true;

    dispatch(setNameError(""));
    dispatch(setPhoneError(""));

    if (!name.trim()) {
      dispatch(setNameError("Vui lòng nhập họ và tên"));
      isValid = false;
    }

    if (!phone.trim()) {
      dispatch(setPhoneError("Vui lòng nhập số điện thoại"));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      dispatch(setLoading(true));

      await fetch("/api/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          grade: Number(grade),
        }),
      });

      dispatch(resetSetup());

      router.push("/dashboard");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md bg-transparent">
        <CardContent className="p-8 space-y-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Chào mừng</h1>
            <p className="text-sm text-muted-foreground">
              Nhập thông tin để tiếp tục
            </p>
          </div>

          <InputField
            label="Họ và tên"
            value={name}
            error={nameError}
            onChange={(value) => dispatch(setName(value))}
          />

          <InputField
            label="Số điện thoại"
            value={phone}
            error={phoneError}
            onChange={(value) => dispatch(setPhone(value))}
          />

          <div className="space-y-2">
            <Label className="text-muted">Khối lớp</Label>

            <Select
              value={grade}
              onValueChange={(value) => dispatch(setGrade(value))}
            >
              <SelectTrigger className="border text-foreground">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="10">Lớp 10</SelectItem>
                <SelectItem value="11">Lớp 11</SelectItem>
                <SelectItem value="12">Lớp 12</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-accent text-accent-foreground h-11 rounded-md text-[14px]"
          >
            {loading ? "Đang xử lý..." : "Xác nhận"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
