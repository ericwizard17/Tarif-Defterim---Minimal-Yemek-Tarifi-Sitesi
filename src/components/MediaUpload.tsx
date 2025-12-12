import { useState } from 'react';
import { uploadImage, uploadVideo, UploadProgress } from '../utils/storage';

interface MediaUploadProps {
    onImageUpload: (url: string) => void;
    onVideoUpload: (url: string) => void;
    currentImageUrl?: string;
    currentVideoUrl?: string;
}

export default function MediaUpload({
    onImageUpload,
    onVideoUpload,
    currentImageUrl,
    currentVideoUrl
}: MediaUploadProps) {
    const [imageProgress, setImageProgress] = useState<UploadProgress>({
        progress: 0,
        status: 'idle'
    });

    const [videoProgress, setVideoProgress] = useState<UploadProgress>({
        progress: 0,
        status: 'idle'
    });

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const url = await uploadImage(file, setImageProgress);
            onImageUpload(url);
        } catch (error) {
            console.error('Image upload error:', error);
        }
    };

    const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const url = await uploadVideo(file, setVideoProgress);
            onVideoUpload(url);
        } catch (error) {
            console.error('Video upload error:', error);
        }
    };

    return (
        <div className="space-y-4">
            {/* Image Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tarif Görseli <span className="text-gray-500 font-normal">(opsiyonel, max 5MB)</span>
                </label>

                {currentImageUrl && (
                    <div className="mb-3">
                        <img
                            src={currentImageUrl}
                            alt="Tarif görseli"
                            className="w-full h-48 object-cover rounded border border-gray-300"
                        />
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-50"
                />

                {imageProgress.status === 'uploading' && (
                    <div className="mt-2">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Yükleniyor...</span>
                            <span>{Math.round(imageProgress.progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${imageProgress.progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {imageProgress.status === 'error' && (
                    <p className="mt-2 text-sm text-red-600">{imageProgress.error}</p>
                )}

                {imageProgress.status === 'success' && (
                    <p className="mt-2 text-sm text-green-600">✓ Görsel yüklendi</p>
                )}
            </div>

            {/* Video Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tarif Videosu <span className="text-gray-500 font-normal">(opsiyonel, max 100MB)</span>
                </label>

                {currentVideoUrl && (
                    <div className="mb-3">
                        <video
                            src={currentVideoUrl}
                            controls
                            className="w-full h-48 rounded border border-gray-300"
                        />
                    </div>
                )}

                <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-50"
                />

                {videoProgress.status === 'uploading' && (
                    <div className="mt-2">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Video yükleniyor...</span>
                            <span>{Math.round(videoProgress.progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${videoProgress.progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {videoProgress.status === 'error' && (
                    <p className="mt-2 text-sm text-red-600">{videoProgress.error}</p>
                )}

                {videoProgress.status === 'success' && (
                    <p className="mt-2 text-sm text-green-600">✓ Video yüklendi</p>
                )}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-3">
                <p className="text-xs text-gray-600">
                    <strong>Not:</strong> Görsel ve video yüklemek için Firebase Storage kullanılmaktadır.
                    Dosyalar güvenli bir şekilde saklanır ve hızlı erişim sağlar.
                </p>
            </div>
        </div>
    );
}
