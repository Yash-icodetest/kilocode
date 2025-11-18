// kilocode_change - new file
import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import ChatRow from "../../../webview-ui/src/components/chat/ChatRow"
import * as ChatMessages from "../src/mockData/chatMessages"
import { ChatRowGallery } from "../src/components/ChatRowGallery"

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
// ALL ASK STORIES GALLERY
// ============================================================================

export const AllAskStories: Story = {
	parameters: {
		docs: {
			storyName: "All/AllAskStories",
		},
	},
	render: () => {
		const allStories: Array<{ name: string; story: Story }> = [
			{
				name: "Followup/Default",
				story: {
					args: {
						message: ChatMessages.createFollowupMessage(),
					},
				},
			},
			{
				name: "Followup/Partial",
				story: {
					args: {
						message: ChatMessages.createFollowupMessage({ partial: true }),
						isStreaming: true,
					},
				},
			},
			{
				name: "Followup/WithoutSuggestions",
				story: {
					args: {
						message: ChatMessages.createFollowupMessage({ withSuggestions: false }),
					},
				},
			},
			{
				name: "Command/Default",
				story: {
					args: {
						message: ChatMessages.createCommandMessage(),
					},
				},
			},
			{
				name: "Command/Partial",
				story: {
					args: {
						message: ChatMessages.createCommandMessage({ partial: true }),
						isStreaming: true,
					},
				},
			},
			{
				name: "Command/Output",
				story: {
					args: {
						message: ChatMessages.createCommandOutputMessage(),
					},
				},
			},
			{
				name: "BrowserActionLaunch/Default",
				story: {
					args: {
						message: ChatMessages.createBrowserActionLaunchMessage(),
					},
				},
			},
			{
				name: "McpServer/Tool",
				story: {
					args: {
						message: ChatMessages.createMcpServerMessage({ type: "use_mcp_tool" }),
					},
				},
			},
			{
				name: "McpServer/Resource",
				story: {
					args: {
						message: ChatMessages.createMcpServerMessage({ type: "access_mcp_resource" }),
					},
				},
			},
			{
				name: "CompletionResult/Default",
				story: {
					args: {
						message: ChatMessages.createCompletionResultMessage(),
					},
				},
			},
			{
				name: "ApiReqFailed/Default",
				story: {
					args: {
						message: ChatMessages.createApiReqFailedMessage(),
					},
				},
			},
			{
				name: "ResumeTask/Default",
				story: {
					args: {
						message: ChatMessages.createResumeTaskMessage(),
					},
				},
			},
			{
				name: "ResumeTask/Completed",
				story: {
					args: {
						message: ChatMessages.createResumeCompletedTaskMessage(),
					},
				},
			},
			{
				name: "MistakeLimitReached/Default",
				story: {
					args: {
						message: ChatMessages.createMistakeLimitReachedMessage(),
					},
				},
			},
			{
				name: "AutoApprovalMaxReqReached/Default",
				story: {
					args: {
						message: ChatMessages.createAutoApprovalMaxReqReachedMessage(),
					},
				},
			},
			{
				name: "PaymentRequiredPrompt/Default",
				story: {
					args: {
						message: ChatMessages.createPaymentRequiredPromptMessage(),
					},
				},
			},
			{
				name: "InvalidModel/Default",
				story: {
					args: {
						message: ChatMessages.createInvalidModelMessage(),
					},
				},
			},
			{
				name: "ReportBug/Default",
				story: {
					args: {
						message: ChatMessages.createReportBugMessage(),
					},
				},
			},
			{
				name: "Condense/Default",
				story: {
					args: {
						message: ChatMessages.createCondenseMessage(),
					},
				},
			},
			{
				name: "Tool/EditedExistingFile",
				story: {
					args: {
						message: ChatMessages.createToolMessage({ tool: "editedExistingFile" }),
					},
				},
			},
			{
				name: "Tool/EditedExistingFileProtected",
				story: {
					args: {
						message: ChatMessages.createToolMessage({ tool: "editedExistingFile", isProtected: true }),
					},
				},
			},
			{
				name: "Tool/EditedExistingFileOutsideWorkspace",
				story: {
					args: {
						message: ChatMessages.createToolMessage({
							tool: "editedExistingFile",
							isOutsideWorkspace: true,
						}),
					},
				},
			},
			{
				name: "Tool/AppliedDiff",
				story: {
					args: {
						message: ChatMessages.createToolMessage({ tool: "appliedDiff" }),
					},
				},
			},
			{
				name: "Tool/NewFileCreated",
				story: {
					args: {
						message: ChatMessages.createToolMessage({ tool: "newFileCreated" }),
					},
				},
			},
			{
				name: "Tool/InsertContent",
				story: {
					args: {
						message: ChatMessages.createToolMessage({ tool: "insertContent", lineNumber: 42 }),
					},
				},
			},
			{
				name: "Tool/ReadFile",
				story: {
					args: {
						message: ChatMessages.createToolMessage({ tool: "readFile" }),
					},
				},
			},
			{
				name: "Tool/CodebaseSearch",
				story: {
					args: {
						message: ChatMessages.createToolMessage({
							tool: "codebaseSearch",
							query: "user authentication",
						}),
					},
				},
			},
			{
				name: "Tool/BatchFiles",
				story: {
					args: {
						message: ChatMessages.createToolMessage({
							tool: "editedExistingFile",
							batchFiles: [
								{ path: "src/file1.ts", lineSnippet: "export const", key: "1", content: "content1" },
								{ path: "src/file2.ts", lineSnippet: "export const", key: "2", content: "content2" },
							],
						}),
					},
				},
			},
			{
				name: "Tool/BatchDiffs",
				story: {
					args: {
						message: ChatMessages.createToolMessage({
							tool: "appliedDiff",
							batchDiffs: [
								{ path: "src/file1.ts", changeCount: 3, key: "1", content: "diff1" },
								{ path: "src/file2.ts", changeCount: 5, key: "2", content: "diff2" },
							],
						}),
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
