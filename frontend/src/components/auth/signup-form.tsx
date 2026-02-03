import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthStore } from "@/stores/useAuthStore"
import { useNavigate } from "react-router"

const signupFormSchema = z.object({
  firstName: z.string().min(1, "Vui lòng nhập tên của bạn"),
  lastName: z.string().min(1, "Vui lòng nhập họ của bạn"),
  username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
  email: z.string().email("Vui lòng nhập địa chỉ email hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"), 
})

type SignUpFormValues = z.infer<typeof signupFormSchema>;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signUp} = useAuthStore();
  const navigate = useNavigate();
  const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm<SignUpFormValues>({
  resolver: zodResolver(signupFormSchema),
});

const onSubmit = async (data: SignUpFormValues) => {
  const { firstName, lastName, username, email, password } = data;
  await signUp(username, password, email, firstName, lastName);
  navigate('/signin');
};

return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-border">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className = "flex flex-col gap-6">
            {/* logo - title */}
            <div className="flex flex-col items-center text-center gap-2">
              <a href="" className = "mx-auto block w-fit text-center">
                <img src="/logo.svg" alt="Logo" />
              </a>
              <h1 className = " text-2xl font-bold">Đăng ký tài khoản</h1>
              <p className  = "text-muted-foreground text-balance">Chào mừng bạn ! Hãy đăng ký để bắt đầu cùng Moji  </p>
            </div>
            {/* ho và tên */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="lasttName" className="block text-sm ">
                  Họ
                </Label>
                <Input type="text" id="lasttName" {...register("lastName")} placeholder="Họ" />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName" className="block text-sm">
                  Tên
                </Label>
                <Input type="text" id="firstName" {...register("firstName")} placeholder="Tên" />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
              </div>
            </div>
            {/* username */}
            <div className="flex flex-col gap-3">
                <Label htmlFor="username" className="block text-sm">
                  Tên đăng nhập
                </Label>
                <Input type="text" id="username" {...register("username")} placeholder="Moji" />
                {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
            </div>
            {/* email */}
            <div className="flex flex-col gap-3">
                <Label htmlFor="email" className="block text-sm">
                  Email
                </Label>
                <Input type="text" id="email" {...register("email")} placeholder="moji@gmail.com" />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            {/* password */}
            <div className="flex flex-col gap-3">
                <Label htmlFor="password" className="block text-sm">
                  Password
                </Label>
                <Input type="password" id="password" {...register("password")} />
                {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
            </div>
            {/* Button submit */}
            <Button type = "submit" className = "w-full" disabled={isSubmitting}>Đăng ký</Button>
            <div className = "text-center text-sm">
              Đã có tài khoản? <a href="/signin" className = "underline-offset-4 hover:text-primary">Đăng nhập</a>
            </div>
          </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholderSignUp.png"
              alt="Image"
              className="absolute top-1/2 -translate-y-1/2 object-cover "
            />
          </div>
        </CardContent>
      </Card>
      <div className=" text-xs text-balance px-6 text-center *:[a]:hover:text-primary text-muted-foreground *:[a]:underline *:[a]:underline-offset-4 ">
        Bằng cách tiếp tục , bạn đồng ý với  <a href="#">Điều khoản dịch vụ</a>{" "}
        và <a href="#">Chính sách bảo mật</a>.
      </div>
    </div>
  );
}
