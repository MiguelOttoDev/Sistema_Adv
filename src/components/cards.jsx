import Card from "./card";

export default function Cards() {
    return (
        <div className="flex flex-wrap justify-around gap-4 p-4">
            <Card bgColor="bg-blue-200" textColor="text-slate-800" borderColor="border-blue-400" />
            <Card bgColor="bg-green-200" textColor="text-slate-800" borderColor="border-green-400"/>
            <Card bgColor="bg-red-200" textColor="text-slate-800" borderColor="border-red-400" />
            <Card bgColor="bg-yellow-200" textColor="text-slate-800" borderColor="border-yellow-400"  />
        </div>
    );
}
