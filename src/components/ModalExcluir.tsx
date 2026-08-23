'use client';

export default function ModalConfirmarExclusao({
    nomeProduto,
    onConfirm,
    onCancel,
    carregando,
}: {
    nomeProduto: string;
    onConfirm: () => void;
    onCancel: () => void;
    carregando: boolean;
}) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-linear-to-b from-base to-pinkish rounded-xl p-6 w-full max-w-sm flex flex-col gap-4">
                <p className="font-nunito font-bold text-forestgreen text-lg">Excluir Produto</p>
                <p className="font-nunito text-forestgreen text-sm">
                    Tem certeza que deseja excluir <span className="font-bold">{nomeProduto}</span>? Essa ação não pode ser desfeita.
                </p>

                <div className="flex gap-3 mt-2">
                    <button
                        onClick={onConfirm}
                        disabled={carregando}
                        className="font-nunito bg-red-300 rounded-sm text-red-600 font-semibold text-sm px-3 py-1.5 hover:underline cursor-pointer transition-colors disabled:opacity-70"
                    >
                        {carregando ? "Excluindo..." : "Excluir"}
                    </button>
                    <button
                        onClick={onCancel}
                        className="font-nunito bg-blue-200 rounded-sm text-blue-600 font-semibold text-sm px-3 py-1.5 hover:underline cursor-pointer"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}