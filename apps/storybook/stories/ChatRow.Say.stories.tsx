// kilocode_change - new file
import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import ChatRow from "../../../webview-ui/src/components/chat/ChatRow"
import * as ChatMessages from "../src/mockData/chatMessages"
import { ChatRowGallery } from "../src/components/ChatRowGallery"

// Stable no-op callback to prevent infinite loops in UpdateTodoListToolBlock
const stableNoOp = () => {}

const meta = {
	title: "Chat/ChatRow",
	component: ChatRow,
	argTypes: {
		message: {
			control: false,
			description: "The message to display",
		},
		isExpanded: {
			control: "boolean",
			description: "Whether the row is expanded",
		},
		isLast: {
			control: "boolean",
			description: "Whether this is the last message",
		},
		isStreaming: {
			control: "boolean",
			description: "Whether the message is currently streaming",
		},
	},
	args: {
		isExpanded: false,
		isLast: true,
		isStreaming: false,
		onToggleExpand: fn(),
		onHeightChange: fn(),
		onSuggestionClick: fn(),
		onBatchFileResponse: fn(),
		highlighted: false,
		enableCheckpoints: true,
		onFollowUpUnmount: fn(),
		isFollowUpAnswered: false,
		editable: false,
		hasCheckpoint: false,
	},
} satisfies Meta<typeof ChatRow>

export default meta
type Story = StoryObj<typeof meta>

// ============================================================================
// ALL SAY STORIES GALLERY
// ============================================================================

export const AllSayStories: Story = {
	parameters: {
		docs: {
			storyName: "All/AllSayStories",
		},
	},
	render: () => {
		const allStories: Array<{ name: string; story: Story }> = [
			{
				name: "Text/Default",
				story: {
					args: {
						message: ChatMessages.createTextMessage(),
					},
				},
			},
			{
				name: "Text/Partial",
				story: {
					args: {
						message: ChatMessages.createTextMessage({ partial: true }),
						isStreaming: true,
					},
				},
			},
			{
				name: "Text/WithImages",
				story: {
					args: {
						message: ChatMessages.createTextMessage({
							images: [
								"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
							],
						}),
					},
				},
			},
			{
				name: "Reasoning/Default",
				story: {
					args: {
						message: ChatMessages.createReasoningMessage(),
					},
				},
			},
			{
				name: "Reasoning/Completed",
				story: {
					args: {
						message: ChatMessages.createReasoningMessage({ elapsedMs: 8200 }),
						isStreaming: false,
						isLast: true,
					},
				},
			},
			{
				name: "Reasoning/Partial",
				story: {
					args: {
						message: ChatMessages.createReasoningMessage({ partial: true }),
						isStreaming: true,
					},
				},
			},
			{
				name: "ApiRequest/InProgress",
				story: {
					args: {
						message: ChatMessages.createApiReqStartedMessage(),
						isStreaming: true,
					},
				},
			},
			{
				name: "ApiRequest/WithCost",
				story: {
					args: {
						message: ChatMessages.createApiReqStartedMessage({ cost: 0.05 }),
					},
				},
			},
			{
				name: "ApiRequest/Cancelled",
				story: {
					args: {
						message: ChatMessages.createApiReqStartedMessage({ cancelReason: "user_cancelled" }),
					},
				},
			},
			{
				name: "ApiRequest/Failed",
				story: {
					args: {
						message: ChatMessages.createApiReqStartedMessage({
							streamingFailedMessage: "Streaming failed: Connection lost",
						}),
					},
				},
			},
			{
				name: "ApiRequest/UsageMissing",
				story: {
					args: {
						message: ChatMessages.createApiReqStartedMessage({ usageMissing: true }),
						isStreaming: true,
					},
				},
			},
			{
				name: "Error/Default",
				story: {
					args: {
						message: ChatMessages.createErrorMessage(),
					},
				},
			},
			{
				name: "Error/DiffError",
				story: {
					args: {
						message: ChatMessages.createDiffErrorMessage(),
					},
				},
			},
			{
				name: "CompletionResult/Default",
				story: {
					args: {
						message: ChatMessages.createSayCompletionResultMessage(),
					},
				},
			},
			{
				name: "UserFeedback/Default",
				story: {
					args: {
						message: ChatMessages.createUserFeedbackMessage(),
					},
				},
			},
			{
				name: "UserFeedback/WithImages",
				story: {
					args: {
						message: ChatMessages.createUserFeedbackMessage({
							images: [
								"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
							],
						}),
					},
				},
			},
			{
				name: "UserFeedback/Diff",
				story: {
					args: {
						message: ChatMessages.createUserFeedbackDiffMessage(),
					},
				},
			},
			{
				name: "CommandOutput/Default",
				story: {
					args: {
						message: ChatMessages.createCommandOutputSayMessage(),
					},
				},
			},
			{
				name: "ShellIntegrationWarning/Default",
				story: {
					args: {
						message: ChatMessages.createShellIntegrationWarningMessage(),
					},
				},
			},
			{
				name: "BrowserAction/Default",
				story: {
					args: {
						message: ChatMessages.createBrowserActionMessage(),
					},
				},
			},
			{
				name: "BrowserAction/Result",
				story: {
					args: {
						message: ChatMessages.createBrowserActionResultMessage(),
					},
				},
			},
			{
				name: "McpServer/RequestStarted",
				story: {
					args: {
						message: ChatMessages.createMcpServerRequestStartedMessage(),
					},
				},
			},
			{
				name: "McpServer/Response",
				story: {
					args: {
						message: ChatMessages.createMcpServerResponseMessage(),
					},
				},
			},
			{
				name: "SubtaskResult/Default",
				story: {
					args: {
						message: ChatMessages.createSubtaskResultMessage(),
					},
				},
			},
			{
				name: "CheckpointSaved/Default",
				story: {
					args: {
						message: ChatMessages.createCheckpointSavedMessage(),
					},
				},
			},
			{
				name: "CondenseContext/Default",
				story: {
					args: {
						message: ChatMessages.createCondenseContextMessage(),
					},
				},
			},
			{
				name: "CondenseContext/Partial",
				story: {
					args: {
						message: ChatMessages.createCondenseContextMessage({ partial: true }),
						isStreaming: true,
					},
				},
			},
			{
				name: "CondenseContext/Error",
				story: {
					args: {
						message: ChatMessages.createCondenseContextErrorMessage(),
					},
				},
			},
			{
				name: "CodebaseSearchResult/Default",
				story: {
					args: {
						message: ChatMessages.createCodebaseSearchResultMessage(),
					},
				},
			},
			{
				name: "UserEditTodos/Default",
				story: {
					parameters: {
						extensionState: {
							alwaysAllowUpdateTodoList: true,
						},
					},
					args: {
						message: ChatMessages.createUserEditTodosMessage(),
						editable: false,
						onBatchFileResponse: stableNoOp,
					},
					render: (args) => {
						return <ChatRow {...args} onBatchFileResponse={stableNoOp} />
					},
				},
			},
			{
				name: "Image/Default",
				story: {
					args: {
						message: ChatMessages.createImageMessage(),
					},
				},
			},
		]

		return (
			<ChatRowGallery
				stories={allStories.map(({ name, story }) => ({
					name,
					story,
					meta,
				}))}
			/>
		)
	},
}
