<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $message = Message::create($validated);

        // Telegram Webhook
        $telegramToken = env('TELEGRAM_BOT_TOKEN');
        $chatId = env('TELEGRAM_CHAT_ID');

        if ($telegramToken && $chatId) {
            try {
                $text = "🔔 *Pesan Baru dari Portofolio!*\n\n"
                      . "*Nama:* {$validated['name']}\n"
                      . "*Email:* {$validated['email']}\n"
                      . "*Pesan:*\n{$validated['message']}";
                
                \Illuminate\Support\Facades\Http::post("https://api.telegram.org/bot{$telegramToken}/sendMessage", [
                    'chat_id' => $chatId,
                    'text' => $text,
                    'parse_mode' => 'Markdown'
                ]);
            } catch (\Exception $e) {
                // Ignore exception to not interrupt user flow
                \Illuminate\Support\Facades\Log::error('Telegram Webhook Error: ' . $e->getMessage());
            }
        }

        return response()->json(['success' => true, 'message' => 'Pesan berhasil dikirim!']);
    }
}
