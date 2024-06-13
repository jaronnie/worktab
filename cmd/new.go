/*
Copyright © 2024 jaronnie <jaron@jaronnie.com>

*/

package cmd

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/jzero-io/jzero/internal/new"

	"github.com/go-git/go-git/v5/plumbing"
	"github.com/zeromicro/go-zero/core/color"

	"github.com/go-git/go-git/v5"
	"github.com/jzero-io/jzero/embeded"
	"github.com/spf13/cobra"
	"github.com/zeromicro/go-zero/tools/goctl/util/pathx"
)

// newCmd represents the new command
var newCmd = &cobra.Command{
	Use:   "new",
	Short: "jzero new project",
	Long:  `jzero new project`,
	PreRun: func(_ *cobra.Command, args []string) {
		new.Version = Version
		new.AppName = args[0]

		if new.Output == "" {
			new.Output = args[0]
		}
		if new.Module == "" {
			appDir := new.AppDir
			appDir = strings.TrimPrefix(appDir, ".")
			appDir = strings.TrimPrefix(appDir, "./")
			new.Module = filepath.ToSlash(filepath.Join(new.Output, appDir))
		}

		if new.Remote != "" && new.Branch != "" {
			// clone to local
			home, _ := os.UserHomeDir()
			_ = os.MkdirAll(filepath.Join(home, ".jzero"), 0o755)
			if !pathx.FileExists(filepath.Join(home, ".jzero", "templates", new.Branch)) {
				fmt.Printf("%s templates into '%s/templates/%s', please wait...\n", color.WithColor("Cloning", color.FgGreen), filepath.Join(home, ".jzero"), new.Branch)
				_, err := git.PlainClone(filepath.Join(home, ".jzero", "templates", new.Branch), false, &git.CloneOptions{
					SingleBranch:  true,
					URL:           new.Remote,
					Depth:         0,
					ReferenceName: plumbing.ReferenceName("refs/heads/" + new.Branch),
				})
				cobra.CheckErr(err)
				fmt.Println(color.WithColor("Done", color.FgGreen))
			} else {
				fmt.Printf("%s cache: %s\n", color.WithColor("Using", color.FgGreen), filepath.Join(home, ".jzero", "templates", new.Branch))
			}
			embeded.Home = filepath.Join(home, ".jzero", "templates", new.Branch)
		}
	},
	RunE: new.NewProject,
	Args: cobra.ExactArgs(1),
}

func init() {
	rootCmd.AddCommand(newCmd)
	newCmd.Flags().StringVarP(&new.Module, "module", "m", "", "set go module")
	newCmd.Flags().StringVarP(&new.Output, "output", "o", "", "set output dir")
	newCmd.Flags().StringVarP(&new.AppDir, "app-dir", "", ".", "set app dir")
	newCmd.Flags().StringVarP(&embeded.Home, "home", "", "", "set home dir")
	newCmd.Flags().StringVarP(&new.Remote, "remote", "r", "https://github.com/jzero-io/templates", "remote templates repo")
	newCmd.Flags().StringVarP(&new.Branch, "branch", "b", "", "remote templates repo branch")
}
