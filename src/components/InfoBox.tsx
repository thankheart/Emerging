import { ReactNode } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

interface InfoBoxProps {
    title: string;
    children: ReactNode;
    width?: string;
}

function InfoBox({ title, children, width="max-w-2xl"}: InfoBoxProps) {
    return (
        <Dialog>
            <DialogTrigger className="bg-teal-500 text-gray-800 border-teal-700 border-4 rounded-lg px-4 py-2 h-48 w-64 hover:bg-sky-900 hover:scale-105 hover:duration-500">
                <div className="text-xl font-bold">{title}</div>
                <div className="">Click here for more information</div>
            </DialogTrigger>

            <DialogContent className={`w-full ${width}  overflow-y-auto p-6 bg-white rounded-lg shadow-lg`}>
                <DialogTitle className="text-lg font-bold mb-4">{title}</DialogTitle>
                <div className="text-gray-700  overflow-y-auto">{children}</div>
            </DialogContent>


        </Dialog>
    );
}

export default InfoBox;
